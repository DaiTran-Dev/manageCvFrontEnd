<template>
  <div>
    <TableCv
      :itemsTable="itemTable"
      @click-delete="deleteActice($result)"
    ></TableCv>
  </div>
</template>

<script>
import TableCv from "~/components/cv/CvTable";
import { apiGetCv, apiPostCv, apiUpdateCv, apiDeleteCv} from "~/api/cv.js";

export default {
  components: {
    TableCv,
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
    };
  },
  methods: {
    deleteActice(id){
      await apiDeleteCv(app.$axios,id);
    }
  },
};
</script>

<style lang="stylus"></style>