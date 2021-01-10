<template>
  <div
    class="flex flex-col items-center h-full min-h-screen p-4 font-serif bg-primary"
  >
    <div class="w-full max-w-screen-lg">
      <div class="flex justify-between">
        <h1 class="text-3xl text-gray-50">Hire Latam</h1>
        <ul class="flex flex-row items-end">
          <li class="text-gray-50 ml-5 hover:underline cursor-pointer"> Latam </li>
          <li class="text-gray-50 ml-5 hover:underline cursor-pointer"> Contact Us </li>
          <li class="text-gray-50 ml-5 hover:underline cursor-pointer font-black"> Post a Job </li>
        </ul>
      </div>
      <h3 class="mt-3 text-xl text-gray-50">Jobs</h3>
      <jobs-list :jobs="jobs" />
    </div>
  </div>
</template>

<script>
import JobsList from "../components/JobsList.vue";

const getJobs = () => import("~/static/jobs.json").then((m) => m.default || m);

export default {
  components: { JobsList },
  async asyncData({ req }) {
    const jobs = await getJobs();
    return { jobs };
  },
};
</script>
