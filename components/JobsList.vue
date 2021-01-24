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
      <p class="text-2xl text-white text-center" ref="loadingText">
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
    terms: async function() {
      this.jobs = [];
      this.jobs = await this.getJobs();
    },
  },
  data() {
    return {
      jobs: [],
      activeItem: null,
    };
  },
  async mounted() {
    this.jobs = await this.getJobs();
  },
  methods: {
    onClick: function(itemId) {
      if (this.activeItem === itemId) {
        this.activeItem = null;
      } else {
        this.activeItem = itemId;
      }
    },
    getJobs: async function() {
      const terms = this.terms;
      const params = { q: terms };
      const loadingElement = this.$refs.loadingText;

      let counter = 2;
      const loadingTextTimeout = setInterval(() => {
        if (loadingElement) {
          loadingElement.innerText = "Loading" + new Array(counter).join(".");
          counter = (counter + 1) % 5;
        }
      }, 300);

      const jobs = await this.$axios.$get("/.netlify/functions/query-jobs", {
        params,
      });

      clearInterval(loadingTextTimeout);
      return jobs.map((job) => ({ id: job._id, ...job }));
    },
  },
  fetchOnServer: false,
};
</script>
