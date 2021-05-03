<template>
  <div>
    <div class="d-flex my-3">
      <b-button @click.prevent="$bvModal.show('createEidtCvModal')"
        >Tạo Mới Cv</b-button
      >
    </div>

    <!-- List Cv  -->
    <table-cv
      v-if="itemTable.length > 0"
      :itemsTable="itemTable"
      @click-edit="editAction($event)"
      @click-delete="deleteAction($event)"
    />
    <div v-else class="text-center"><h2>Hiện Tại Chưa có dữ liệu...</h2></div>

    <!-- Modal Create or edit Cv-->
    <b-modal id="createEidtCvModal" size="lg" title="Thông Tin Cv" hide-footer>
      <cv-form
        :cv="cv"
        @on-change-status-form="newCreationState = $event"
        @onSubmit="onSubmit($event)"
      />
    </b-modal>
  </div>
</template>

<script>
import TableCv from "~/components/cv/CvTable";
import Modal from "~/components/Modal";
import CvForm from "~/components/cv/CvForm";

export default {
  components: {
    TableCv,
    Modal,
    CvForm,
  },
  data() {
    return {
      itemTable: [
        {
          id: 1,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          schools: "THPT Nghĩa Dân",
          year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status_cv: 1,
          date_to_work: "2021-04-15",
          email_status: 0,
        },
        {
          id: 2,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          schools: "THPT Nghĩa Dân",
          year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status_cv: 2,
          date_to_work: "2021-04-15",
          email_status: 1,
        },
        {
          id: 3,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          schools: "THPT Nghĩa Dân",
          year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status_cv: 3,
          date_to_work: "2021-04-15",
          email_status: 2,
        },
        {
          id: 4,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          schools: "THPT Nghĩa Dân",
          year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status_cv: 4,
          date_to_work: "2021-04-15",
          email_status: 3,
        },
      ],
      cv: {
        id: "",
        name: "",
        phone: "",
        email: "",
        schools: "",
        year: "",
        job_id: "",
        link_cv: "",
        note: "",
        received_date: "",
      },
      newCreationState: false,
    };
  },
  methods: {
    deleteAction(id) {
      var indexArrayItemTable = null;
      indexArrayItemTable = this.itemTable.findIndex((x) => {
        return x.id == id;
      });
      if (indexArrayItemTable != null && indexArrayItemTable >= 0) {
        this.itemTable.splice(indexArrayItemTable, 1);
      }
    },
    editAction(id) {
      this.cv = {
        name: "Rel Rel",
        email: "rel.dev890@gmail.com",
        phone: "01234567999",
        schools: "THPT Nghĩa Dân",
        year: "2001",
        job_id: 2,
        link_cv:
          "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
        note: "Note ne",
        received_date: "2021-08-07",
        interview_date: "2021-08-09 13:42:6",
        status_cv: 1,
        date_to_work: "2021-04-15",
        email_status: 0,
      };
      this.cv.id = id;
      this.$bvModal.show("createEidtCvModal");
    },
    onSubmit(cv) {
      var id = cv.id;
      if (cv && cv.id) {
        var cvEdit = this.itemTable.find((x) => {
          return x.id == id;
        });
        if (cvEdit) {
          cvEdit.name = "Da edit";
        }
        this.$bvModal.hide("createEidtCvModal");
      } else {
        this.itemTable.push({
          id: 9,
          name: "Rel Rel",
          email: "rel.dev890@gmail.com",
          phone: "01234567999",
          schools: "THPT Nghĩa Dân",
          year: "2001",
          job_id: 2,
          link_cv:
            "https://p4.wallpaperbetter.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
          note: "Note ne",
          received_date: "2021-08-07",
          interview_date: "2021-08-09 13:42:6",
          status_cv: 1,
          date_to_work: "2021-04-15",
          email_status: 0,
        });
        if (!newCreationState) {
          this.$bvModal.hide("createEidtCvModal");
        }
      }
    },
  },
};
</script>

<style></style>
