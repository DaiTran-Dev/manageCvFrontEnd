<template>
  <div class="mr-sm-1 mr-md-2">
    <!-- Btn Open Modal and Btn create CV -->
    <b-row class="mb-2" v-show="activeFormSearch">
      <b-col sm="10">
        <curriculum-vitae-search @search-action="searchAction($event)" />
      </b-col>
      <b-col sm="2">
        <div class="d-flex justify-content-end">
          <b-button @click.prevent="$bvModal.show('createEidtCvModal')"
            >Tạo Mới Cv</b-button
          >
        </div>
      </b-col>
    </b-row>

    <!-- Filter  -->
    <b-row class="mb-5">
      <b-col sm="12">
        <curriculum-vitae-filter @search-action="searchAction($event)" />
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
      ></curriculum-vitae-create-edit>
    </b-modal>
  </div>
</template>

<script>
import CurriculumVitaeTable from '~/components/curriculumVitae/CurriculumVitaeTable'
import CurriculumVitaeCreateEdit from '~/components/curriculumVitae/CurriculumVitaeCreateEdit'
import CurriculumVitaeSearch from '~/components/curriculumVitae/CurriculumVitaeSearch'
import CurriculumVitaeFilter from '~/components/curriculumVitae/CurriculumVitaeFilter'

export default {
  components: {
    CurriculumVitaeTable,
    CurriculumVitaeCreateEdit,
    CurriculumVitaeSearch,
    CurriculumVitaeFilter,
  },
  data() {
    return {
      itemTable: [],
      curriculumVitaeId: null,
      activeFormSearch: true,
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
        console.log('Erro -submit form')
        return
      }
      this.curriculumVitaeId = null
      this.loadDataTableCurriculumVitae()
    },
    async getAllCurriculumVitae() {
      //Call API get all CurriculumVitae
      return await this.$axios.$get('curriculumVitaes')
    },

    setItemTable(curriculumVitaes) {
      if (!Array.isArray(curriculumVitaes)) {
        console.log('curriculumVitaes not array')
        return
      }
      this.itemTable = curriculumVitaes
    },
    loadDataTableCurriculumVitae() {
      var curriculumVitaes = this.getAllCurriculumVitae()
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
      //Call API
      return await this.$axios.$get('curriculumVitaes/filterByListFied', {
        params: filteredFields,
      })
    },
    searchAction(filteredFields) {
      if (
        filteredFields &&
        Object.keys(filteredFields).length == 0 &&
        filteredFields.constructor === Object
      ) {
        this.loadDataTableCurriculumVitae()
        return
      }
      var curriculumVitaes = this.getCurriculumVitaeByFilteredFields(
        filteredFields
      )
      curriculumVitaes
        .then((res) => {
          this.itemTable = res
        })
        .catch((err) => {
          console.log('Erro filteredFields ' + err)
        })
    },
  },
  created() {
    //Load all data Curriculum Vitae to Table
    this.loadDataTableCurriculumVitae()
  },
}
</script>

<style></style>
