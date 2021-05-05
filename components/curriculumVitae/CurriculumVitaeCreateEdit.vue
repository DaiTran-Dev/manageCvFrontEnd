<template>
  <div>
    <curriculum-vitae-form
      :curriculumVitae="curriculumVitae"
      @on-change-status-form="newCreationState = $event"
      @onSubmit="onSubmit($event)"
    />
  </div>
</template>

<script>
import CurriculumVitaeForm from './CurriculumVitaeForm'
export default {
  components: {
    CurriculumVitaeForm,
  },
  props: {
    curriculumVitaeId: {
      type: Number,
      require: false,
      default: () => null,
    },
  },
  data() {
    return {
      newCreationState: false,
      curriculumVitae: {
        id: null,
        name: '',
        phone: '',
        email: '',
        university: '',
        birday_year: '',
        job_id: '',
        link_cv: '',
        note: '',
        received_date: '',
      },
    }
  },
  methods: {
    async createAction(curriculumVitae) {
      console.log(curriculumVitae)
      return await this.$axios.$post('curriculumVitaes', curriculumVitae)
    },
    async updateAction(curriculumVitaeId,curriculumVitae) {
      return await this.$axios.$put(`curriculumVitaes/${curriculumVitaeId}`,curriculumVitae)
    },
    async findCurriculumVitaeById(curriculumVitaeId) {
      return await this.$axios.$get(`curriculumVitaes/getById/${curriculumVitaeId}`)
    },
    onSubmit(curriculumVitae) {
      if (!curriculumVitae || !(curriculumVitae instanceof Object)) {
        return
      }
      if (curriculumVitae.id) {
        this.updateAction(curriculumVitae.id,curriculumVitae)
          .then((res) => {
            this.$bvModal.hide('createEidtCvModal')
            this.$emit('on-send-feedback-form', true)
          })
          .catch((err) => {
            console.log(err)
            this.$emit('on-send-feedback-form', false)
          })
      } else {
        this.createAction(curriculumVitae)
          .then((res) => {
            this.$emit('on-send-feedback-form', true)
            if (!this.newCreationState) {
              this.$bvModal.hide('createEidtCvModal')
            }
          })
          .catch((err) => {
            console.log(err)
            this.$emit('on-send-feedback-form', false)
          })
      }
    },
    setCurriculumVitaeByDefault() {
      // Set value default
      this.curriculumVitae = {
        id: null,
        name: '',
        phone: '',
        email: '',
        university: '',
        birday_year: '',
        job_id: '',
        link_cv: '',
        note: '',
        received_date: '',
      }
    },
    setCurriculumVitaeByValue(curriculumVitae) {
      // Validate data source
      if (!curriculumVitae || !(curriculumVitae instanceof Object)) {
        return
      }

      // Set value
      this.curriculumVitae = curriculumVitae

      // Set date default
      if (!this.curriculumVitae.received_date) {
        this.curriculumVitae.received_date = this.dateNow()
      }
    },
  },
  beforeMount() {
    console.log('Id Cv props la : . ' + this.curriculumVitaeId)
  },
  watch: {
    curriculumVitaeId: {
      immediate: true,
      handler(newCurriculumVitaeId, oldCurriculumVitaeId) {
        if (newCurriculumVitaeId) {
          var curriculumVitae = this.findCurriculumVitaeById(
            newCurriculumVitaeId
          )
          curriculumVitae
            .then((res) => {
              this.setCurriculumVitaeByValue(res)
            })
            .catch((err) => {
              console.log('Erro Call Api .' + err)
            })
        } else {
          this.setCurriculumVitaeByDefault()
        }
      },
    },
  },
}
</script>

<style>
</style>