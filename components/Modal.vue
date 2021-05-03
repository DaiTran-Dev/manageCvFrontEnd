<template>
  <div>
    <!-- Button modal  -->
    <b-button @click.prevent="$bvModal.show(idModal)">{{
      titleButton
    }}</b-button>

    <!-- Modal -->
    <b-modal
      :id="idModal"
      :size="sizeModal"
      :title="titleModal"
      hide-footer
    >
      <slot></slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    idModal: {
      type: String,
      require: true,
    },
    sizeModal: {
      type: String,
      require: false,
      default: () => "lg",
    },
    titleModal: {
      type: String,
      require: false,
      default: () => "Modal",
    },
    titleButton: {
      type: String,
      require: false,
      default: () => "Show Modal",
    },
  },
};
</script>

<style>
</style>
