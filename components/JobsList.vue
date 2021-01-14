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

const getJobs = () => import("~/static/jobs.json").then((m) => m.default || m);

export default {
  components: { JobItem },
  props: {
    terms: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      jobs: [],
      activeItem: null,
    };
  },
  async fetch() {
    this.jobs = await getJobs();
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
};
</script>
