<template>
  <div class="flex flex-col items-center h-full min-h-screen p-4">
    <div class="w-full max-w-screen-lg relative">
      <navigation active-page="home" />
      <h3 class="mt-3 text-xl text-white">Jobs</h3>
      <div class="w-full sm:w-1/3">
        <form-input v-model.lazy="terms" placeholder="Search keywords" />
      </div>
      <jobs-list :terms="terms" />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import FormInput from "../components/FormInput.vue";
import JobsList from "../components/JobsList.vue";

export default {
  components: { Navigation, FormInput, JobsList },
  data: function() {
    return {
      terms: "",
    };
  },
};
</script>
