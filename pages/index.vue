<template>
  <div
    class="flex flex-col items-center h-full min-h-screen p-4 font-serif bg-primary"
  >
    <div class="w-full max-w-screen-lg">
      <h1 class="text-3xl text-gray-50">Hire Latam</h1>
      <h3 class="mt-3 text-xl text-gray-50">Jobs</h3>
      <div class="flex flex-col">
        <job-item v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </div>
</template>

<script>
import JobItem from "../components/JobItem.vue";

const getJobs = () => import("~/static/jobs.json").then((m) => m.default || m);

export default {
  components: { JobItem },
  async asyncData({ req }) {
    const jobs = await getJobs();
    console.log(jobs);
    return { jobs };
  },
};
</script>
