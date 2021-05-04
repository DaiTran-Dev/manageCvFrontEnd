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
import CurriculumVitaeForm from "./CurriculumVitaeForm";
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
        name: "",
        phone: "",
        email: "",
        university: "",
        birday_year: "",
        job_id: "",
        link_cv: "",
        note: "",
        received_date: "",
      },
    };
  },
  methods: {
    deleteAction(id) {
      var indexDelete = null;
      indexDelete = this.itemTable.findIndex((row) => {
        return row.id == id;
      });
      if (indexDelete != null && indexDelete >= 0) {
        this.itemTable.splice(indexDelete, 1);
      }
    },
    editAction(id) {
      this.cv = {
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
      };
      this.cv.id = id;
      this.$bvModal.show("createEidtCvModal");
    },
    onSubmit(curriculumVitae) {
      if (!curriculumVitae || !(curriculumVitae instanceof Object)) {
        return;
      }
      if (curriculumVitae.id) {
        console.log("Edit completed...");
        this.$bvModal.hide("createEidtCvModal");
        this.$emit("on-send-feedback-form", true);
      } else {
        console.log("Create completed...");
        if (!newCreationState) {
          this.$bvModal.hide("createEidtCvModal");
        }
      }
    },
    dateNow() {
      var dateNow = new Date();
      return (
        dateNow.getFullYear() +
        "-" +
        (dateNow.getMonth() + 1) +
        "-" +
        dateNow.getDate()
      );
    },
    setCurriculumVitaeByDefault() {
      // Set value default
      this.curriculumVitae = {
        id: null,
        name: "",
        phone: "",
        email: "",
        university: "",
        birday_year: "",
        job_id: "",
        link_cv: "",
        note: "",
        received_date: "",
      };
    },
    setCurriculumVitaeByValue(curriculumVitae) {
      // Validate data source
      if (!curriculumVitae || !(curriculumVitae instanceof Object)) {
        return;
      }

      // Set value
      this.curriculumVitae = curriculumVitae;

      // Set date default
      if (!this.curriculumVitae.received_date) {
        this.curriculumVitae.received_date = this.dateNow();
      }
    },
    async getCurriculumVitae(curriculumVitaeId) {
      var response = {
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
      };
      return response;
    },
  },
  beforeMount() {
    console.log("Id Cv props la : . " + this.curriculumVitaeId);
  },
  watch: {
    curriculumVitaeId: {
      immediate: true,
      handler(newCurriculumVitaeId, oldCurriculumVitaeId) {
        if (newCurriculumVitaeId) {
          var response = this.getCurriculumVitae(newCurriculumVitaeId);
          response
            .then((res) => {
              this.setCurriculumVitaeByValue(res);
            })
            .catch((err) => {
              console.log("Erro Call Api ." + err);
            });
        } else {
          this.setCurriculumVitaeByDefault();
        }
      },
    },
  },
};
</script>

<style>
</style>