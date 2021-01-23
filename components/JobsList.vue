<template>
  <div class="flex flex-col">
    <template v-if="jobs.length">
      <job-item
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        :show-description="activeItem == job.id"
        @click="onClick"
      />
    </template>
    <div
      v-else
      class="py-3 flex flex-row items-center min-h-full justify-center"
    >
      <p class="text-2xl text-white text-center" ref="loading">
        Loading
      </p>
    </div>
  </div>
</template>

<script>
import JobItem from "../components/JobItem.vue";

export default {
  components: { JobItem },
  props: {
    terms: {
      type: String,
      required: true,
    },
  },
  watch: {
    terms: "$fetch",
  },
  data() {
    return {
      jobs: [],
      activeItem: null,
    };
  },
  async fetch() {
    let counter = 2;
    this.jobs = await getJobs(this.$axios, this.terms);
  },
  methods: {
    onClick: function(itemId) {
      if (this.activeItem === itemId) {
        this.activeItem = null;
      } else {
        this.activeItem = itemId;
      }
    },
  },
  fetchOnServer: false,
};

const getJobs = async ($axios, terms) => {
  const params = { q: terms };
  const loadingTextTimeout = setInterval(() => {
    if (this.$refs.loading.innerText) {
      this.$refs.loading.innerText = "Loading" + new Array(counter).join(".");
      counter = (counter + 1) % 5;
    }
  }, 300);
  const jobs = await $axios.$get("/.netlify/functions/query-jobs", {
    params,
  });

  clearInterval(loadingTextTimeout);
  return jobs.map((job) => ({ id: job._id, ...job }));
};
</script>
