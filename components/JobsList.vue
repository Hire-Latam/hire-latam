<template>
  <div class="flex flex-col">
    <job-item v-for="job in jobs" :key="job.id" :job="job" />
  </div>
</template>

<script>
import JobItem from "../components/JobItem.vue";

const getJobs = () => import("~/static/jobs.json").then((m) => m.default || m);

export default {
  components: { JobItem },
  props: ["jobs"],
};
</script>