<template>
  <input @input="$emit('input', $event.target.value)" />
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
