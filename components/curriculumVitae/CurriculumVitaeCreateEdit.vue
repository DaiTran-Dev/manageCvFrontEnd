<template>
  <div>
    <curriculum-vitae-form
      v-if="$auth.user.level == 0"
      :curriculumVitae="curriculumVitae"
      @on-change-status-form="newCreationState = $event"
      @onSubmit="onSubmit($event)"
    />
    <curriculum-vitae-form-interview
      v-else-if="$auth.user.level == 1"
      :curriculumVitae="curriculumVitae"
      @on-change-status-form="newCreationState = $event"
      @onSubmit="onSubmit($event)"
    />
  </div>
</template>

<script>
import CurriculumVitaeForm from './CurriculumVitaeForm'
import CurriculumVitaeFormInterview from './CurriculumVitaeFormInterview'

export default {
  components: {
    CurriculumVitaeForm,
    CurriculumVitaeFormInterview,
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
    //Call API cretae curriculum vitaes
    async createAction(curriculumVitae) {
      return await this.$axios.$post('curriculumVitaes', curriculumVitae)
    },

    //Call API update curriculum vitaes all
    async updateAction(curriculumVitaeId, curriculumVitae) {
      return await this.$axios.$put(
        `curriculumVitaes/${curriculumVitaeId}`,
        curriculumVitae
      )
    },

    //Call API update curriculum vitaes by fied
    async updateByFied(curriculumVitaeId, curriculumVitae) {
      return await this.$axios.$put(
        `curriculumVitaes/updateByFied/${curriculumVitaeId}`,
        curriculumVitae
      )
    },

    //Call API find curriculum vitaes by id
    async findCurriculumVitaeById(curriculumVitaeId) {
      return await this.$axios.$get(
        `curriculumVitaes/getById/${curriculumVitaeId}`
      )
    },

    //Submit Form
    onSubmit(curriculumVitae) {
      //Check emty curriculumVitae
      if (!curriculumVitae || !(curriculumVitae instanceof Object)) {
        return
      }
      //Update curriculumVitae.id not empty
      if (curriculumVitae.id) {
        if (curriculumVitae.category_update) {
          // Call method updateByFied
          this.updateByFied(curriculumVitae.id, curriculumVitae)
            .then((res) => {
              this.$bvModal.hide('createEidtCvModal')
              //Send event to parent componet
              this.$emit('on-send-feedback-form', true)
            })
            .catch((err) => {
              //Send event to parent componet
              this.$emit('on-send-feedback-form', false)
            })
          return
        }
        this.updateAction(curriculumVitae.id, curriculumVitae)
          .then((res) => {
            this.$bvModal.hide('createEidtCvModal')
            //Send event to parent componet
            this.$emit('on-send-feedback-form', true)
          })
          .catch((err) => {
            //Send event to parent componet
            this.$emit('on-send-feedback-form', false)
          })
      } else {
        //Create curriculumVitae.id  empty
        this.createAction(curriculumVitae)
          .then((res) => {
            //Send event to parent componet
            this.$emit('on-send-feedback-form', true)

            //Check have open or close modal
            if (!this.newCreationState) {
              this.$bvModal.hide('createEidtCvModal')
            }
          })
          .catch((err) => {
            //Send event to parent componet
            this.$emit('on-send-feedback-form', false)
          })
      }
    },

    // Set value default to curriculumVitae
    setCurriculumVitaeByDefault() {
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

    // Set value to curriculumVitae
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
  watch: {
    curriculumVitaeId: {
      immediate: true,
      handler(newCurriculumVitaeId, oldCurriculumVitaeId) {
        //Check newCurriculumVitaeId empty
        if (newCurriculumVitaeId) {
          //CALL METHOD findCurriculumVitaeById -> call api find by id
          var curriculumVitae = this.findCurriculumVitaeById(
            newCurriculumVitaeId
          )
          curriculumVitae
            .then((res) => {
              // Set value
              this.setCurriculumVitaeByValue(res)
            })
            .catch((err) => {
              console.log('Erro Call Api .' + err)
            })
        } else {
          // Set date default
          this.setCurriculumVitaeByDefault()
        }
      },
    },
  },
}
</script>

<style>
</style>