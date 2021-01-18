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

export default {
  components: { JobItem },
  props: {
    terms: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      jobs: [],
      activeItem: null,
    };
  },
  created() {
    getJobs(this.$axios).then((jobs) => {
      this.jobs = jobs;
    });
  },
  // async fetch() {
  //   this.jobs = await getJobs(this.$axios);
  // },
  methods: {
    onClick: function (itemId) {
      console.log(process.env);
      getJobs(this.$axios).then(console.log);
      if (this.activeItem === itemId) {
        this.activeItem = null;
      } else {
        this.activeItem = itemId;
      }
    },
  },
};

const getJobs = async (client) => {
  const jobs = await client.$get("/.netlify/functions/query-jobs");
  console.log(jobs);

  return jobs.map((job) => ({ id: job._id, ...job }));
};
</script>
