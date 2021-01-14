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
  data: function () {
    return {
      jobs: [],
      activeItem: null,
    };
  },
  async fetch() {
    this.jobs = await getJobs(this.$fire.firestore);
  },
  methods: {
    onClick: function (itemId) {
      if (this.activeItem === itemId) {
        this.activeItem = null;
      } else {
        this.activeItem = itemId;
      }
    },
  },
};

async function getJobs(firestore, tagFilters = []) {
  let jobsRef = firestore.collection("jobs");
  if (tagFilters.length) {
    jobsRef = jobsRef.where("tags", "array-contains-any", tagFilters);
  }
  const jobsSnapshot = await jobsRef.get();
  return jobsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}
</script>
