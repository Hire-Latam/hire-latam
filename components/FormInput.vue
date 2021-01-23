<template>
  <div class="flex flex-col flex-grow my-2">
    <label class="text-white">
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <input
      class="flex p-2 bg-gray-200 rounded-md"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :min="min"
      :max="max"
      @value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: [
    "label",
    "type",
    "name",
    "placeholder",
    "required",
    "value",
    "min",
    "max",
  ],
};
</script>
