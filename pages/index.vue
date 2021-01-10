<template>
  <div
    class="flex flex-col items-center h-full min-h-screen p-4 font-serif bg-primary"
  >
    <div class="w-full max-w-screen-lg">
      <nav class="flex justify-between">
        <a class="text-3xl text-white" href="/">Hire Latam</a>
        <ul class="flex flex-row items-end">
          <a
            class="text-white ml-5 hover:underline cursor-pointer"
            href="/latam"
          >
            Latam
          </a>
          <a
            class="text-white ml-5 hover:underline cursor-pointer"
            href="/contact"
          >
            Contact Us
          </a>
          <a
            class="text-white ml-5 hover:underline cursor-pointer font-black"
            href="/post-job"
          >
            Post a Job
          </a>
        </ul>
      </nav>
      <h3 class="mt-3 text-xl text-white">Jobs</h3>
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
