//Config fields table cv
export const FIELDS_TABLE_CV = [
    { key: "id", label: 'STT', sortable: false },
    { key: "name", label: 'Tên', sortable: false },
    { key: "phone", label: 'Số Điện Thoại', sortable: false },
    { key: "email", label: 'Email', sortable: false },
    { key: "year", label: 'Năm Sinh', sortable: false },
    { key: "job_id", label: 'Vị Trí', sortable: false },
    { key: "link_cv", label: 'Link CV', sortable: false },
    { key: "received_date", label: 'Ngày Nhận CV', sortable: false },
    { key: "interview_date", label: 'Ngày PV', sortable: false },
    { key: "status_cv", label: 'Trạng Thái', sortable: false },
    { key: "date_to_work", label: 'Ngày Làm Việc', sortable: false },
    { key: "email_status", label: 'Phản Hồi Email', sortable: false },
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
    { id: "", name: "Chưa Có Trạng Thái" },
    { id: 1, name: "Trượt CV" },
    { id: 2, name: "Đỗ CV" },
    { id: 3, name: "Trượt PV" },
    { id: 4, name: "Đỗ PV" }
];

//data demo email status
export const EMAIL_STATUS = [
    { id: 0, name: "Chưa Gửi" },
    { id: 1, name: "Gửi Cho Người Trượt CV" },
    { id: 2, name: "Gửi Cho Người Đỗ CV" },
    { id: 3, name: "Gửi Cho Người Trượt PV" },
    { id: 4, name: "Gửi Cho Người Đỗ PV" }
];