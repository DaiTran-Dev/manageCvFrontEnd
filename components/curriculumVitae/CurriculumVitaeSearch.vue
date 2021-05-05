<template>
  <div>
    <b-input-group>
      <b-form-input
        type="text"
        placeholder="Nhập email cần search..."
        v-model="filteredFields.email"
      ></b-form-input>
      <b-input-group-append>
        <b-button @click="searchAction()"
          ><b-icon icon="search"></b-icon
        ></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import { convertOptionQueries } from '~/help/app.js'

export default {
  data() {
    return {
      filteredFields: {
        email: '',
      },
    }
  },
  methods: {
    searchAction() {
      this.$emit('search-action', convertOptionQueries(this.filteredFields))
    },
  },
}
</script>

<style>
</style>