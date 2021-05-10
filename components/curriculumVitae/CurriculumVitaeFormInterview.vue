<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col sm="6">
          <b-form-group label="Ngày Phỏng Vấn" v-if="interviewStatus">
            <b-form-datepicker
              class="mb-2"
              v-model="editCurriculumVitae.interview_date"
              placeholder="YYYY-MM-DD"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group label="Ngày Đi Làm" v-else>
            <b-form-datepicker
              class="mb-2"
              v-model="editCurriculumVitae.date_to_work"
              placeholder="YYYY-MM-DD"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group label="Giờ Phỏng Vấn" v-if="interviewStatus">
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
          v-model="editCurriculumVitae.status"
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
      interviewStatus: true,
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
      //Set interview_date_time
      this.editCurriculumVitae.interview_date_time =
        this.editCurriculumVitae.interview_date +
        ' ' +
        this.editCurriculumVitae.interview_time
      console.log(this.editCurriculumVitae)
      //Send event onSubmit to parent component and resultis editCurriculumVitae
      this.$emit('onSubmit', this.editCurriculumVitae)
    },

    //Reset form
    onReset(event) {
      event.preventDefault()
      this.editCurriculumVitae = this.curriculumVitae
    },
  },
  created() {
    // Check the path url for the correct form input date
    var path = this.$route.fullPath
    if (path == '/curriculumVitae/unreviewed') {
      this.interviewStatus = true
    } else {
      this.interviewStatus = false
    }
  },
  watch: {
    curriculumVitae: {
      immediate: true,
      handler() {
        this.editCurriculumVitae = this.curriculumVitae
      },
    },
  },
}
</script>

<style>
</style>
