<template>
  <div
    class="flex flex-col items-center h-full min-h-screen p-4 font-serif bg-primary"
  >
    <div class="w-full max-w-screen-lg relative">
      <nav class="flex justify-between">
        <a class="text-3xl text-white" href="/">Hire Latam</a>
        <ul class="flex flex-row items-center invisible sm:visible">
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
        <div class="visible self-center sm:hidden">
          <a v-if="!burgerMenuActive" href="#" class="text-white" @click="burgerMenuActive = !burgerMenuActive"> Menu </a>
          <a v-else href="#" class="text-white bg-gray-700 rounded-full p-3 w-2 h-4" @click="burgerMenuActive = !burgerMenuActive"> X </a>
        </div>
      </nav>
      <div v-if="burgerMenuActive" class="w-full px-2 pt-2 pb-3 bg-primary">
        <a href="/" class="bg-gray-700 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="/latam" class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Latam</a>
        <a href="/contact" class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        <a href="/post-job" class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Post a Job</a>
      </div>
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
  data: function () {
    return {
      burgerMenuActive: false,
    }
  },
  async asyncData({ req }) {
    const jobs = await getJobs();
    return { jobs };
  },
};
</script>
