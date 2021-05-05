<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col sm="6">
          <b-form-group label="Ngày Phỏng Vấn">
            <b-form-datepicker
              class="mb-2"
              v-model="editCurriculumVitae.interview_date"
              placeholder="YYYY-MM-DD"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Giờ Phỏng Vấn">
            <b-form-timepicker
              v-model="editCurriculumVitae.interview_time"
              locale="vn"
            ></b-form-timepicker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group label="Trạng Thái Curriculum Vitae">
        <b-form-select
          size="sm"
          :value="editCurriculumVitae.status"
          :options="statusCurriculumVitae"
          value-field="id"
          text-field="name"
          class="width-max-content"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Ghi Chú">
        <b-form-textarea
          placeholder="Ghi chú..."
          rows="3"
          max-rows="6"
          v-model="editCurriculumVitae.note"
        ></b-form-textarea>
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
import { STATUS_CV } from '~/constant/constant'

export default {
  props: {
    curriculumVitae: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      editCurriculumVitae: {},
      newCreationState: false,
    }
  },
  computed: {
    statusCurriculumVitae() {
      return STATUS_CV
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.editCurriculumVitae.interview_date_time =
        this.editCurriculumVitae.interview_date +
        ' ' +
        this.editCurriculumVitae.interview_time
      console.log('--------')
      console.log(this.editCurriculumVitae)
      console.log('--------')
      this.$emit('onSubmit', this.editCurriculumVitae)
    },
    onReset(event) {
      event.preventDefault()
      this.editCurriculumVitae = this.curriculumVitae
    },
  },
  watch: {
    curriculumVitae: {
      immediate: true,
      handler() {
        this.editCurriculumVitae =this.curriculumVitae
      },
    },
  },
}
</script>

<style>
</style>
