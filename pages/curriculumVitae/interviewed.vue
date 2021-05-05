<template>
  <div class="mr-sm-1 mr-md-2">
    <b-row class="mb-5">
      <b-col sm="12">
        <curriculum-vitae-search @search-action="searchAction($event)" />
      </b-col>
    </b-row>
    <!-- List Cv  -->
    <curriculum-vitae-table
      v-if="itemTable.length > 0"
      :itemsTable="itemTable"
      @click-edit="editAction($event)"
      @delete-action="deleteAction($event)"
      @update-curriculumVitae="updateTableAction($event)"
    />
    <div v-else class="text-center"><h2>Hiện Tại Chưa có dữ liệu...</h2></div>

    <!-- Modal Create or edit Cv-->
    <b-modal id="createEidtCvModal" size="lg" title="Thông Tin Cv" hide-footer>
      <curriculum-vitae-create-edit
        :curriculumVitaeId="curriculumVitaeId"
        @on-send-feedback-form="handlingFeedbackForm($event)"
      />
    </b-modal>
  </div>
</template>

<script>
import CurriculumVitaeTable from '~/components/curriculumVitae/CurriculumVitaeTable'
import CurriculumVitaeCreateEdit from '~/components/curriculumVitae/CurriculumVitaeCreateEdit'
import CurriculumVitaeSearch from '~/components/curriculumVitae/CurriculumVitaeSearch'

export default {
  components: {
    CurriculumVitaeTable,
    CurriculumVitaeCreateEdit,
    CurriculumVitaeSearch,
  },
  data() {
    return {
      itemTable: [],
      curriculumVitaeId: null,
    }
  },
  methods: {
    deleteAction(deleteStatus) {
      if (deleteStatus) {
        //Call Method loadDataTableCurriculumVitae
        this.loadDataTableCurriculumVitae()
      } else {
        console.log('Delete erro')
      }
    },
    editAction(curriculumVitaeId) {
      console.log('Asdad')
      console.log(curriculumVitaeId)
      this.curriculumVitaeId = curriculumVitaeId
      this.$bvModal.show('createEidtCvModal')
    },
    updateTableAction(updateStatus) {
      if (!updateStatus) {
        return
      }
      console.log('Ok da reload')
      //Call Method loadDataTableCurriculumVitae
      this.loadDataTableCurriculumVitae()
    },
    handlingFeedbackForm(stausFeedback) {
      if (!stausFeedback) {
        return
      }
      this.curriculumVitaeId = null
    },
    setItemTable(curriculumVitaes) {
      if (!Array.isArray(curriculumVitaes)) {
        return
      }
      this.itemTable = curriculumVitaes
    },
    loadDataTableCurriculumVitae() {
      var filteredFields = {
        status: {
          condition: '=',
          value: 2,
        },
      }
      var curriculumVitaes = this.getCurriculumVitaeByFilteredFields(
        filteredFields
      )
      curriculumVitaes
        .then((res) => {
          //Set value to ItemTable
          this.setItemTable(res)
        })
        .catch((err) => {
          console.log('Erro loadDataTable CurriculumVitae ' + err)
        })
    },
    async getCurriculumVitaeByFilteredFields(filteredFields) {
      console.log('Thong TIn query')
      //Call API
      return await this.$axios.$get('curriculumVitaes/filterByListFied', {
        params: filteredFields,
      })
    },
    searchAction(filteredFields) {
      filteredFields.status = {
        condition: '=',
        value: 2,
      }
      console.log(filteredFields)
      var curriculumVitaes = this.getCurriculumVitaeByFilteredFields(
        filteredFields
      )
      curriculumVitaes
        .then((res) => {
          this.itemTable = res
        })
        .catch((err) => {
          console.log('Erro search ' + err)
        })
    },
  },
  created() {
    //Load all data Curriculum Vitae Unreviewed to Table
    this.loadDataTableCurriculumVitae()
  },
}
</script>

