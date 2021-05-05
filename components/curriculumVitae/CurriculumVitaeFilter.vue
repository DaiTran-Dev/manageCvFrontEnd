<template>
  <div>
    <b-button v-b-toggle.collapse-advanced-search-curriculum-vitae
      >Advanced Search</b-button
    >
    <b-collapse id="collapse-advanced-search-curriculum-vitae" class="mt-2">
      <b-card>
        <b-row
          ><b-col sm="12">
            <b-form-group label="Email cần searh...">
              <b-form-input
                type="text"
                placeholder="Nhập email cần search..."
                v-model="filteredFields.email"
              ></b-form-input> </b-form-group></b-col
        ></b-row>
        <b-row>
          <b-col sm="4">
            <b-form-group label="Trạng thái gửi email">
              <b-form-select
                size="sm"
                v-model="filteredFields.send_mail_status"
                :value="filteredFields.send_mail_status"
                :options="emailStatus"
                value-field="id"
                text-field="name"
                ><option value="">All</option></b-form-select
              >
            </b-form-group>
          </b-col>
          <b-col sm="4">
            <b-form-group
              label="Trạng Thái Curriculum Vitae"
              class="width-inherit"
            >
              <b-form-select
                size="sm"
                v-model="filteredFields.status"
                :value="filteredFields.status"
                :options="statusCv"
                value-field="id"
                text-field="name"
                ><option value="">All</option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12">
            <div class="d-flex justify-content-end">
              <b-button @click="searchAction()">Search</b-button>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { CATEGORY_JOB, STATUS_CV, EMAIL_STATUS } from '~/constant/constant.js'
import { findNameFromListMasterById, convertOptionQueries } from '~/help/app.js'

export default {
  data() {
    return {
      filteredFields: {
        send_mail_status: '',
        status: '',
        email: '',
      },
    }
  },
  methods: {
    searchAction() {
      this.$emit('search-action', convertOptionQueries(this.filteredFields))
    },
  },
  computed: {
    jobCategory() {
      return CATEGORY_JOB
    },
    findNameFromListMasterById() {
      return findNameFromListMasterById
    },
    statusCv() {
      return STATUS_CV.filter(function (row) {
        return Number.isInteger(row.id)
      })
    },
    emailStatus() {
      return EMAIL_STATUS.filter(function (row) {
        return Number.isInteger(row.id)
      })
    },
  },
}
</script>

<style>
.width-inherit {
  width: inherit;
}
.width-max-content {
  width: max-content;
}
</style>