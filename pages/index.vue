<template>
  <div class="h-screen p-3 font-serif bg-primary">
    <h1 class="text-3xl text-gray-50">Hire Latam</h1>
    <div
      v-for="job in jobs"
      :key="job.id"
      class="flex items-center border-2 rounded-2xl border-solid border-white p-2 mt-2"
    >
      <div class="flex rounded-lg overflow-hidden h-16 w-16">
        <img class="object-cover" src="/logo.png" />
      </div>
      <div class="flex flex-col justify-between mx-4">
        <div>
          <h1 class="text-xl text-gray-50">{{ job.title }}</h1>
          <h2 class="text-sm text-gray-300">{{ job.company }}</h2>
        </div>
        <ul class="flex mt-2">
          <li
            class="text-xs mr-3 bg-gray-50 rounded-3xl p-1 px-3"
            v-for="tag in job.tags"
            :key="`${job.id}-${tag}`"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const getJobs = () => import("~/statics/jobs.json").then((m) => m.default || m);

export default {
  async asyncData({ req }) {
    const jobs = await getJobs();
    console.log(jobs);
    return { jobs };
  },
};
</script>
