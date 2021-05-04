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
import CurriculumVitaeTable from "~/components/curriculumVitae/CurriculumVitaeTable";
import Modal from "~/components/Modal";
import CurriculumVitaeCreateEdit from "~/components/curriculumVitae/CurriculumVitaeCreateEdit";
import CurriculumVitaeSearch from "~/components/curriculumVitae/CurriculumVitaeSearch";
import CurriculumVitaeFilter from "~/components/curriculumVitae/CurriculumVitaeFilter";

export default {
  components: {
    CurriculumVitaeTable,
    Modal,
    CurriculumVitaeCreateEdit,
    CurriculumVitaeSearch,
    CurriculumVitaeFilter,
  },
  data() {
    return {
      itemTable: [],
      curriculumVitaeId: null,
    };
  },
  methods: {
    updateTableAction(updateStatus) {
      if (!updateStatus) {
        return;
      }
      console.log("Ok da reload");
      //Call Method loadDataTableCurriculumVitae
      this.loadDataTableCurriculumVitae();
    },
    handlingFeedbackForm(stausFeedback) {
      if (!stausFeedback) {
        return;
      }
      this.curriculumVitaeId = null;
    },
    async getAllCurriculumVitaeByUnreviewed() {
      //Call API get all CurriculumVitae
      return [
        {
          id: 1,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          university: "THPT Nghĩa Dân",
          birday_year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status: 1,
          date_to_work: "2021-04-15",
          send_mail_status: 0,
        },
        {
          id: 2,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          university: "THPT Nghĩa Dân",
          birday_year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status: 2,
          date_to_work: "2021-04-15",
          send_mail_status: 1,
        },
        {
          id: 3,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          university: "THPT Nghĩa Dân",
          birday_year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status: 3,
          date_to_work: "2021-04-15",
          send_mail_status: 2,
        },
        {
          id: 4,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          university: "THPT Nghĩa Dân",
          birday_year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status: 4,
          date_to_work: "2021-04-15",
          send_mail_status: 3,
        },
      ];
    },

    setItemTable(curriculumVitaes) {
      if (!Array.isArray(curriculumVitaes)) {
        console.log("Ko La Mang");
        return;
      }
      this.itemTable = curriculumVitaes;
    },
    loadDataTableCurriculumVitae() {
      var curriculumVitaes = this.getAllCurriculumVitae();
      curriculumVitaes
        .then((res) => {
          //Set value to ItemTable
          this.setItemTable(res);
        })
        .catch((err) => {
          console.log("Erro loadDataTable CurriculumVitae " + err);
        });
    },
    async getCurriculumVitaeByFilteredFields(filteredFields) {
      //Call API
      return [
        {
          id: 2,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          university: "THPT Nghĩa Dân",
          birday_year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status: 2,
          date_to_work: "2021-04-15",
          send_mail_status: 1,
        },
      ];
    },
    searchAction(filteredFields) {
      var curriculumVitaes = this.getCurriculumVitaeByFilteredFields(
        filteredFields
      );
      curriculumVitaes
        .then((res) => {
          this.itemTable = res;
        })
        .catch((err) => {
          console.log("Erro filteredFields " + err);
        });
    },
  },
  created() {
    //Load all data Curriculum Vitae Unreviewed to Table
    this.getAllCurriculumVitaeByUnreviewed();
  },
};
</script>

