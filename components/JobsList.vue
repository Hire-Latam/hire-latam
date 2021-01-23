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
    this.jobs = await this.getJobs();
  },
  methods: {
    async getJobs() {
      const params = { q: this.terms };
      const jobs = await this.$axios.$get("/.netlify/functions/query-jobs", {
        params,
      });
      return jobs.map((job) => ({ id: job._id, ...job }));
    },
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
</script>
