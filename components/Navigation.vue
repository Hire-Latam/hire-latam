<template>
  <div>
    <nav class="flex justify-between">
      <a class="text-3xl text-white" href="/">{{ getTitle() }}</a>
      <ul class="flex flex-row items-center invisible sm:visible">
        <a class="text-white ml-5 hover:underline cursor-pointer" href="/latam">
          Board
        </a>
        <a class="text-white ml-5 hover:underline cursor-pointer" href="/latam">
          Latam
        </a>
        <a
          class="text-white ml-5 hover:underline cursor-pointer"
          href="/contact"
        >
          Contact Us
        </a>
        <a
          class="text-white ml-5 hover:underline cursor-pointer font-black"
          href="/post-job"
        >
          Post a Job
        </a>
      </ul>
      <div class="visible self-center sm:hidden">
        <a
          v-if="!burgerMenuActive"
          href="#"
          class="text-white"
          @click="burgerMenuActive = !burgerMenuActive"
        >
          Menu
        </a>
        <a
          v-else
          href="#"
          class="text-white bg-gray-700 rounded-full p-3 w-2 h-4"
          @click="burgerMenuActive = !burgerMenuActive"
        >
          X
        </a>
      </div>
    </nav>
    <div v-if="burgerMenuActive" class="w-full px-2 pt-2 pb-3 bg-primary">
      <a
        href="/"
        class="bg-gray-700 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Home
      </a>
      <a
        href="/latam"
        class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
      >
        Latam
      </a>
      <a
        href="/contact"
        class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
      >
        Contact Us
      </a>
      <a
        href="/post-job"
        class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
      >
        Post a Job
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activePage: {
      type: String,
      required: true,
      validator: function (activePage) {
        return ["home", "latam", "contact", "post"].includes(activePage);
      },
    },
  },
  data: function () {
    return {
      burgerMenuActive: false,
    };
  },
  methods: {
    getTitle: function () {
      const titles = {
        home: "Hire Latam",
        latam: "Latam",
        contact: "Contact Us",
        post: "Post a Job",
      };

      return titles[this.activePage] || "Hire Latam";
    },
  },
};
</script>