<template>
  <div class="flex flex-col">
    <job-item
      v-for="job in jobs"
      :key="job.id"
      :job="job"
      :show-description="activeItem == job.id"
      @click="onClick"
    />
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
    this.jobs = await getJobs(this.$axios, this.terms);
  },
  methods: {
    onClick: function (itemId) {
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
  const jobs = await $axios.$get("/.netlify/functions/query-jobs", {
    params,
  });
  return jobs.map((job) => ({ id: job._id, ...job }));
};
</script>
