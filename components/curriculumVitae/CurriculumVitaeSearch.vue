<template>
  <div>
    <b-input-group>
      <b-form-input
        type="text"
        placeholder="Nhập email cần search..."
        v-model="filteredFields.content_search"
      ></b-form-input>
      <b-input-group-append>
        <b-button  @click="searchAction()"
          ><b-icon icon="search"></b-icon
        ></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filteredFields:{
        content_search: "",
      },
    };
  },
  methods: {
    searchAction() {
      this.$emit("search-action", this.filteredFields);
    },
  },
};
</script>

<style>
</style>