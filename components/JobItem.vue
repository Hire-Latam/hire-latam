<template>
  <div class="mt-2 border-2 rounded-2xl border-solid border-white hover:bg-gray-900 group">
    <div
      class="flex justify-between items-center p-2 cursor-pointer"
      @click="$emit('click', job.id)"
    >
      <div class="flex items-center">
        <div class="hidden md:flex rounded-full overflow-hidden w-16 h-16">
          <img class="object-cover" src="/logo.png" />
        </div>
        <div class="flex flex-col justify-between mx-4">
          <div>
            <h1 class="text-xl text-white">
              {{ job.title }}
              <span class="text-xs text-white">
                {{ job.salary.symbol }}{{ job.salary.min }}
                -
                {{ job.salary.symbol }}{{ job.salary.max }}
              </span>
            </h1>
            <h2 class="font-light text-sm text-white">
              {{ job.company }}
            </h2>
          </div>
          <ul class="flex flex-wrap mt-2">
            <li
              class="text-xs mr-3 bg-gray-50 rounded-3xl m-1 py-1 px-3"
              v-for="tag in job.tags"
              :key="`${job.id}-${tag}`"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
      <button
        class="mr-3 p-3 bg-gray-50 rounded-lg text-sm opacity-0 group-hover:opacity-100"
      >
        Apply now
      </button>
    </div>
    <div v-if="showDescription" class="p-4">
      <p class="text-white">{{ job.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["job", "showDescription"],
};
</script>
