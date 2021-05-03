<template>
  <b-table
    :items="itemsTable"
    :fields="fields"
    responsive
    bordered
    class="table-cv"
  >
    <!-- Custom field job -->
    <template #cell(job_id)="job_id">
      {{ findNameFromListMasterById(job_id.value, jobCategory) }}
    </template>

    <!-- Custom field job -->
    <template #cell(link_cv)="link_cv">
      <b-link :href="link_cv.value" target="_blank" class="font-weight-bold"
        >Go To CV</b-link
      >
    </template>

    <!-- Custom field  status cv -->
    <template #cell(status_cv)="status_cv_id">
      <SelectOption
        size="sm"
        :value="status_cv_id.value"
        :options="statusCv"
      ></SelectOption>
    </template>

    <!-- Custom field  email_status -->
    <template #cell(email_status)="email_status_id">
      <SelectOption
        size="sm"
        :value="email_status_id.value"
        :options="emailStatus"
      ></SelectOption>
    </template>

    <!-- Custom field  email_status -->
    <template #cell(date_to_work)="date_to_work">
      <b-form-datepicker
        :value="date_to_work.value"
        size="sm"
        class="width-max-content"
        disabled="disabled"
      ></b-form-datepicker>
    </template>

    <!-- Custom field  edit -->
    <template #cell(edit)="row">
      <b-button
        variant="outline-success"
        type="button"
        @click="$emit('click-edit', row.item.id)"
        >Edit</b-button
      >
    </template>

    <!-- Custom field  delete -->
    <template #cell(delete)="row">
      <b-button
        variant="outline-danger"
        type="button"
        @click="$emit('click-delete', row.item.id)"
        >Delete</b-button
      >
    </template>
  </b-table>
</template>

<script>
import {
  FIELDS_TABLE_CV,
  CATEGORY_JOB,
  STATUS_CV,
  EMAIL_STATUS,
} from "~/constant/constant.js";
import { findNameFromListMasterById } from "~/help/app.js";
import SelectOption from "~/components/SelectOption.vue";

export default {
  components: {
    SelectOption,
  },
  data() {
    return {
      review_cv_selected: null,
      result_pv_selected: null,
    };
  },
  props: ["itemsTable"],
  computed: {
    fields() {
      return FIELDS_TABLE_CV;
    },
    jobCategory() {
      return CATEGORY_JOB;
    },
    findNameFromListMasterById() {
      return findNameFromListMasterById;
    },
    statusCv() {
      return STATUS_CV;
    },
    emailStatus() {
      return EMAIL_STATUS;
    },
  },
};
</script>

<style>
.table-cv thead tr th div {
  white-space: nowrap;
}
.table-cv tr td {
  white-space: nowrap;
}
.width-max-content {
  width: max-content;
}
</style>
