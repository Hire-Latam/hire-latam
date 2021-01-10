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

const getJobs = () => import("~/static/jobs.json").then((m) => m.default || m);

export default {
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      activeItem: null
    }
  },
  components: { JobItem },
  methods: {
    onClick: function (itemId) {
      if (this.activeItem === itemId) {
        this.activeItem = null;
      } else {
        this.activeItem = itemId;
      }
    }
  },
};
</script>
