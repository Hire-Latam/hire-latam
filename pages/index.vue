<template>
  <div class="container p-3 font-serif">
  <div class="bg-indigo-900">
    <h1>Hire Latam</h1>
    <div
      v-for="job in jobs"
      :key="job.id"
      class="border-2 rounded-2xl border-solid border-white flex"
    >
      <div class="flex">
        <img src="https://placehold.it/250x250" />
      </div>
      <div class="flex flex-col my-2 mx-4">
        <h1 class="text-3xl">{{ job.title }}</h1>
        <h2 class="">{{ job.company }}</h2>
        <ul>
          <li v-for="tag in job.tags" :key="`${job.id}-${tag}`">
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