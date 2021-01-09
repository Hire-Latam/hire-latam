<template>
  <div
    class="flex flex-col items-center h-full min-h-screen p-4 font-serif bg-primary"
  >
    <div class="max-w-screen-lg">
      <h1 class="text-3xl text-gray-50">Hire Latam</h1>
      <p class="container italic text-gray-50">
        "Many companies are looking to grow their workforce in multiple parts of
        the world. Latin America is a fast-growing tech environment and culture.
        We are seeing the gap between practices in Silicon Valley and Latin
        America is becoming closer" - Bismarck Lepe
      </p>
      <h3 class="mt-3 text-xl text-gray-50">Jobs</h3>
      <div class="flex flex-col">
        <div
          v-for="job in jobs"
          :key="job.id"
          class="flex justify-between items-center border-2 rounded-2xl border-solid border-white p-2 mt-2 cursor-pointer hover:bg-gray-900 group"
        >
          <div class="flex items-center">
            <div class="hidden md:flex rounded-full overflow-hidden w-16 h-16">
              <img class="object-cover" src="/logo.png" />
            </div>
            <div class="flex flex-col justify-between mx-4">
              <div>
                <h1 class="text-xl text-gray-50">{{ job.title }}</h1>
                <h2 class="text-sm text-gray-300">{{ job.company }}</h2>
              </div>
              <ul class="flex flex-wrap mt-2">
                <li
                  class="text-xs mr-3 bg-gray-50 rounded-3xl m-1 py-1 px-3"
                  v-for="tag in job.tags"
                  :key="`${job.id}-${tag}`"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
          <button
            class="mr-3 p-3 bg-gray-50 rounded-lg text-sm opacity-0 group-hover:opacity-100"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const getJobs = () => import("~/static/jobs.json").then((m) => m.default || m);

export default {
  async asyncData({ req }) {
    const jobs = await getJobs();
    console.log(jobs);
    return { jobs };
  },
};
</script>
