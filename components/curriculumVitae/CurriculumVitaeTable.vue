<template>
  <b-table
    :items="itemsTable"
    :fields="fields"
    responsive
    bordered
    class="table-cv"
  >
    <!-- Custom field job -->
    <template #cell(birday_year)="birday_year_id">
      {{ findNameFromListMasterById(birday_year_id.value, yearBirth) }}
    </template>

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
        v-if="$auth.user.level == 1"
        size="sm"
        :value="value"
        :options="statusCv"
        @change="updateAction('status', $event, item.id)"
        value-field="id"
        text-field="name"
        class="width-max-content"
      ></b-form-select>
      <p v-else-if="$auth.user.level == 0">
        {{ findNameFromListMasterById(value, statusCv) }}
      </p>
    </template>

    <!-- Custom field  email_status -->
    <template #cell(send_mail_status)="{ value, item }">
      <b-form-select
        v-if="$auth.user.level == 0"
        size="sm"
        :value="value"
        :options="emailStatus"
        @change="updateAction('send_mail_status', $event, item.id)"
        value-field="id"
        text-field="name"
        class="width-max-content"
      ></b-form-select>
      <p v-else-if="$auth.user.level == 1">
        {{ findNameFromListMasterById(value, emailStatus) }}
      </p>
    </template>

    <!-- Custom field  email_status -->
    <template #cell(date_to_work)="date_to_work">
      <p>{{ date_to_work.value }}</p>
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
    <template #cell(delete)="row" v-if="$auth.user.level == 0">
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
  YEAR_OF_BIRTH,
} from '~/constant/constant.js'
import { findNameFromListMasterById } from '~/help/app.js'

export default {
  data() {
    return {
      statusCurriculumVitae: '',
      sendMailStatusCurriculumVitae: '',
      deleteStatus: false,
    }
  },
  props: ['itemsTable'],
  methods: {
    //Config showBox
    showMsgBoxDelete() {
      return this.$bvModal.msgBoxConfirm(
        'Please confirm that you want to delete everything.',
        {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true,
        }
      )
    },

    // Call API delete a CurriculumVitae by id
    async deleteCurriculumVitae(curriculumVitaeId) {
      return await this.$axios.$delete(`curriculumVitaes/${curriculumVitaeId}`)
    },
    deleteAction(curriculumVitaeId) {
      console.log('Delete... ')
      //Show Confirm message box
      var resultShowMsgBoxDelete = this.showMsgBoxDelete()
      resultShowMsgBoxDelete.then((resultQuestion) => {
        if (resultQuestion) {
          //Call API Delete
          this.deleteCurriculumVitae(curriculumVitaeId)
            .then((res) => {
              //Send event to parent
              this.$emit('delete-action', true)
            })
            .catch((err) => {
              //Send event to parent
              this.$emit('delete-action', true)
            })
        }
      })
    },

    // Call API updaute a CurriculumVitae by id
    async updateCurriculumVitae(curriculumVitae, curriculumVitaeId) {
      return await this.$axios.$put(
        `curriculumVitaes/updateByFied/${curriculumVitaeId}`,
        curriculumVitae
      )
    },

    // Call API send email
    async sendEmail(curriculumVitaeId, statusEmail) {
      return await this.$axios.$get(
        `sendEmail/${curriculumVitaeId}/${statusEmail}`
      )
    },

    async updateAction(field, valueField, curriculumVitaeId) {
      var curriculumVitae = {}
      curriculumVitae[field] = valueField
      //Call API update
      this.updateCurriculumVitae(curriculumVitae, curriculumVitaeId)
        .then((res) => {
          //Send event update to parent
          this.$emit('update-curriculumVitae', true)
          if (field == 'send_mail_status' && valueField != '') {
            //Send Email
            this.sendEmail(curriculumVitaeId, valueField)
          }
        })
        .catch((err) => {
          this.$emit('update-curriculumVitae', false)
        })
    },
  },
  computed: {
    fields() {
      return FIELDS_TABLE_CV
    },
    jobCategory() {
      return CATEGORY_JOB
    },
    findNameFromListMasterById() {
      return findNameFromListMasterById
    },
    statusCv() {
      return STATUS_CV
    },
    emailStatus() {
      return EMAIL_STATUS
    },
    yearBirth() {
      return YEAR_OF_BIRTH.filter((row) => {
        return row.id != ''
      })
    },
  },
}
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
