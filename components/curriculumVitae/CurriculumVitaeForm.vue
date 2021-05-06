<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col sm="6">
          <b-form-group label="Họ Tên">
            <b-form-input
              type="text"
              placeholder="Nhập họ và tên ứng viên... "
              required
              v-model="editCurriculumVitae.name"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group label="Số Điện Thoại">
            <b-form-input
              type="text"
              placeholder="Nhập số điện thoại ứng viên... "
              required
              v-model="editCurriculumVitae.phone"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group label="Email">
        <b-form-input
          type="email"
          placeholder="Nhập email của ứng viên... "
          required
          v-model="editCurriculumVitae.email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Trường Học">
        <b-form-input
          type="text"
          placeholder="Nhập trường học của ứng viên... "
          v-model="editCurriculumVitae.university"
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col sm="6">
          <b-form-group label="Vị Trí Ứng Tuyển">
            <b-form-select
              v-model="editCurriculumVitae.job_id"
              :options="categoryJob"
              value-field="id"
              text-field="name"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group label="Năm Sinh">
            <b-form-select
              v-model="editCurriculumVitae.birday_year"
              :options="yearOfBirth"
              value-field="id"
              text-field="name"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group label="Link CV">
        <b-form-textarea
          placeholder="Nhập Link CV..."
          rows="3"
          max-rows="6"
          v-model="editCurriculumVitae.link_cv"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Ghi Chú">
        <b-form-textarea
          placeholder="Ghi chú..."
          rows="3"
          max-rows="6"
          v-model="editCurriculumVitae.note"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Ngày Nhận CV">
        <b-form-datepicker
          class="mb-2"
          v-model="editCurriculumVitae.received_date"
          placeholder="YYYY-MM-DD"
        ></b-form-datepicker>
      </b-form-group>

      <div class="d-flex justify-content-between">
        <div v-if="!editCurriculumVitae || !editCurriculumVitae.id">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            v-model="newCreationState"
            v-bind:true-value="true"
            v-bind:false-value="false"
            @click="$emit('on-change-status-form', newCreationState)"
          >
            Tiếp Tục Tạo Mới
          </b-form-checkbox>
        </div>
        <div v-else></div>
        <div class="d-flex justify-content-end">
          <b-button type="submit" variant="primary" class="mx-3">{{
            editCurriculumVitae && editCurriculumVitae.id
              ? 'Cập Nhật'
              : 'Tạo Mới'
          }}</b-button>
          <b-button
            type="reset"
            variant="danger"
            v-if="!editCurriculumVitae || !editCurriculumVitae.id"
            >Reset</b-button
          >
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { YEAR_OF_BIRTH, CATEGORY_JOB } from '~/constant/constant'

export default {
  props: {
    curriculumVitae: {
      type: Object,
      require: false,
      default: () => ({
        name: '',
        phone: '',
        email: '',
        university: '',
        birday_year: '',
        job_id: '',
        link_cv: '',
        note: '',
        received_date: '',
      }),
    },
  },
  data() {
    return {
      editCurriculumVitae: {},
      newCreationState: false,
    }
  },
  created() {
    this.editCurriculumVitae.received_date = this.dateNow()
  },
  computed: {
    yearOfBirth() {
      return YEAR_OF_BIRTH
    },
    categoryJob() {
      return CATEGORY_JOB
    },
  },
  methods: {
    // Submit form and send event to component parent and result is editCurriculumVitae
    onSubmit(event) {
      this.$emit('onSubmit', this.editCurriculumVitae)
    },

    //Rest form
    onReset(event) {
      event.preventDefault()
      this.editCurriculumVitae = this.curriculumVitae
    },

    //Get Date Now y-m-d
    dateNow() {
      var dateNow = new Date()
      return (
        dateNow.getFullYear() +
        '-' +
        (dateNow.getMonth() + 1) +
        '-' +
        dateNow.getDate()
      )
    },
  },
  watch: {
    curriculumVitae: {
      immediate: true,
      handler() {
        this.editCurriculumVitae = this.curriculumVitae
          ? {
              id: this.curriculumVitae.id,
              name: this.curriculumVitae.name,
              phone: this.curriculumVitae.phone,
              email: this.curriculumVitae.email,
              university: this.curriculumVitae.university,
              birday_year: this.curriculumVitae.birday_year,
              job_id: this.curriculumVitae.job_id,
              link_cv: this.curriculumVitae.link_cv,
              note: this.curriculumVitae.note,
              received_date: this.curriculumVitae.received_date,
            }
          : {
              name: '',
              phone: '',
              email: '',
              university: '',
              birday_year: '',
              job_id: '',
              link_cv: '',
              note: '',
              received_date: this.dateNow(),
            }
      },
    },
  },
}
</script>

<style>
</style>
