<template>
  <div class="flex flex-col items-center h-full min-h-screen p-4">
    <div class="w-full max-w-screen-lg relative">
      <navigation active-page="post" />
      <p class="mt-3">
        Get exposure by publishing what you are looking for in our 2-minutes
        form. Really simple!
      </p>
      <form>
        <input type="text" />
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