<template>
  <b-form-select
    v-model="selected"
    :options="options"
    :size="size"
    value-field="id"
    text-field="name"
    class="width-max-content"
  ></b-form-select>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  props: ["size", "value", "options"],
  mounted() {
    this.selected = this.value;
    console.log(this.value);
  },
};
</script>

<style>
</style>