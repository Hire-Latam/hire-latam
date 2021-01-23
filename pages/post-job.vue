<template>
  <div class="flex flex-col items-center h-full min-h-screen p-4">
    <div class="w-full max-w-screen-lg relative">
      <navigation active-page="post" />
      <p class="mt-3">
        Get exposure by publishing what you are looking for in our 2-minutes
        form. Really simple!
      </p>
      <form class="mt-3">
        <div class="flex flex-col">
          <label> Job Title </label>
          <input class="p-1" type="text" name="job-title" />
          <label> Company Name </label>
          <input class="p-1" type="text" name="company-name" />
          <label> Description </label>
          <textarea class="p-1" name="description" />
          <label> Salary Min </label>
          <input class="p-1" type="number" name="salary-min" />
          <label> Salary Max </label>
          <input class="p-1" type="number" name="salary-max" />
          <!-- Los tags, la wea :'v -->
        </div>
        <button
          class="mt-3 bg-gray-900 align-right px-4 py-2 rounded-sm"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  components: { Navigation },
};
</script>