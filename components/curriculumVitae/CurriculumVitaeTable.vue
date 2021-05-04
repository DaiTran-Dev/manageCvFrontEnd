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
    <template #cell(status)="{ value, item }">
      <b-form-select
        size="sm"
        :value="value"
        :options="statusCv"
        @change="updateCurriculumVitae('status', $event, item.id)"
        value-field="id"
        text-field="name"
        class="width-max-content"
      ></b-form-select>
    </template>

    <!-- Custom field  email_status -->
    <template #cell(send_mail_status)="{ value, item }">
      <b-form-select
        size="sm"
        :value="value"
        :options="emailStatus"
        @change="updateCurriculumVitae('send_mail_status', $event, item.id)"
        value-field="id"
        text-field="name"
        class="width-max-content"
      ></b-form-select>
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
        @click="deleteAction(row.item.id)"
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

export default {
  data() {
    return {
      statusCurriculumVitae: "",
      sendMailStatusCurriculumVitae: "",
      deleteStatus: false,
    };
  },
  props: ["itemsTable"],
  methods: {
    showMsgBoxDelete() {
      return this.$bvModal.msgBoxConfirm(
        "Please confirm that you want to delete everything.",
        {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        }
      );
    },
    async deleteAction(id) {
      console.log("Delete... ");
      //Show Confirm message box
      var resultShowMsgBoxDelete = this.showMsgBoxDelete();
      resultShowMsgBoxDelete.then((resultQuestion) => {
        if (resultQuestion) {
          //Call API Delete
          console.log("Xóa thành công nhé !!");

          //Send event to parent
          this.$emit("delete-action", true);
        }
      });
    },
    async updateCurriculumVitae(field, valueField, curriculumVitaeId) {
      var curriculumVitae = {};
      curriculumVitae[field] = valueField;
      //Call API update
      console.log("Update in table...");
      console.log(curriculumVitae);
      //Send event update to parent
      this.$emit("update-curriculumVitae", true);
    },
  },
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
