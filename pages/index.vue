<template>
  <div class="flex flex-col items-center h-full min-h-screen p-4">
    <div class="w-full max-w-screen-lg relative">
      <navigation active-page="home" />
      <h3 class="mt-3 text-xl text-white">Jobs</h3>
      <search v-model="terms" @change="handleInputChange" />
      <jobs-list :terms="terms" />
    </div>
  </div>
</template>

<script>
import JobsList from "../components/JobsList.vue";
import Search from "../components/Search.vue";
import Navigation from "../components/Navigation.vue";

export default {
  components: { JobsList, Navigation, Search },
  data: function () {
    return {
      terms: "",
    };
  },
  methods: {
    handleInputChange: function (terms) {
      this.terms = terms;
    },
  },
};
</script>
