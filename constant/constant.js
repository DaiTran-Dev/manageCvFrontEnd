//Config fields table cv
export const FIELDS_TABLE_CV = [
  { key: "id", label: 'STT', sortable: false },
  { key: "name", label: 'Tên', sortable: false },
  { key: "phone", label: 'Số Điện Thoại', sortable: false },
  { key: "email", label: 'Email', sortable: false },
  { key: "birday_year", label: 'Năm Sinh', sortable: false },
  { key: "job_id", label: 'Vị Trí', sortable: false },
  { key: "link_cv", label: 'Link CV', sortable: false },
  { key: "received_date", label: 'Ngày Nhận CV', sortable: false },
  { key: "interview_date_time", label: 'Ngày PV', sortable: false },
  { key: "status", label: 'Trạng Thái', sortable: false },
  { key: "date_to_work", label: 'Ngày Làm Việc', sortable: false },
  { key: "send_mail_status", label: 'Phản Hồi Email', sortable: false },
  { key: "edit", label: 'Sửa', sortable: false },
  { key: "delete", label: 'Xóa', sortable: false },
];

//data demo category job
export const CATEGORY_JOB = [
  { id: "", name: "Chưa Có Vị Trí" },
  { id: 1, name: "TTS PHP" },
  { id: 2, name: "TTS IT Comter" }
];

//data demo status_cv
export const STATUS_CV = [
  { id: "", name: "Chờ Xem Xét CV" },
  { id: 1, name: "Trượt CV" },
  { id: 2, name: "Đỗ CV" },
  { id: 3, name: "Trượt PV" },
  { id: 4, name: "Đỗ PV" }
];

//data demo //data demo send_mail_statu
export const EMAIL_STATUS = [
  { id: 0, name: "Chưa Gửi" },
  { id: 1, name: "Gửi Cho Người Trượt CV" },
  { id: 2, name: "Gửi Cho Người Đỗ CV" },
  { id: 3, name: "Gửi Cho Người Trượt PV" },
  { id: 4, name: "Gửi Cho Người Đỗ PV" }
];

//data Year of Birth
export const YEAR_OF_BIRTH = [
  { id: "", name: "Chọn Năm Sinh" },
  { id: 1, name: "1998" },
  { id: 2, name: "1999" },
  { id: 3, name: "2000" },
  { id: 4, name: "2001" }
];

//permission user
export const PERMISSION_USER = [
  { id: 0, pages: ['/', '/curriculumVitae/'] },
  { id: 1, pages: ['/', '/curriculumVitae/unreviewed', '/curriculumVitae/interviewed'] }
]

//Route Link
export const Routes_Manager_Curriculum_Vitae = [
  { url: "/curriculumVitae/", class: "nav-link", icon: "camera", title: "All Cv", level: 0 },
  { url: "/curriculumVitae/unreviewed", class: "nav-link", icon: "camera", title: "Unreviewed", level: 1 },
  { url: "/curriculumVitae/interviewed", class: "nav-link", icon: "camera", title: "Interviewed", level: 1 }
]