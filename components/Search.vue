<template>
  <input @change="$emit('change', $event.target.value)" />
</template>

<script>
export default {
  name: "Search",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
