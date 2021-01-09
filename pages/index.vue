<template>
  <div class="h-screen p-3 font-serif bg-primary">
    <h1 class="text-5xl text-gray-50">Hire Latam</h1>
    <div
      v-for="job in jobs"
      :key="job.id"
      class="border-2 rounded-2xl border-solid border-white flex mt-3"
    >
      <div class="flex">
        <img src="https://placehold.it/250x250" />
      </div>
      <div class="flex flex-col my-2 mx-4">
        <h1 class="text-3xl text-gray-50">{{ job.title }}</h1>
        <h2 class="text-xl text-gray-300">{{ job.company }}</h2>
        <ul class="flex mt-2">
          <li class="mr-3 bg-gray-50 rounded-3xl p-1 px-3" v-for="tag in job.tags" :key="`${job.id}-${tag}`">
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
