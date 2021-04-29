//Api Delete Cv
export function apiDeleteCv(axios, id) {
    return axios.$delete(`/cv/${id}`)
        .then(res => res)
        .catch(xhr => xhr);
}

//Api Get all Cv
export function apiGetCv(axios) {
    return axios.$get(`/cv`)
        .then(res => res)
        .catch(xhr => xhr);
}

//Api Post Cv
export function apiPostCv(axios, cvObject) {
    return axios.$post(`/cv`, cvObject)
        .then(res => res)
        .catch(xhr => xhr);
}

//Api Update Cv
export function apiUpdateCv(axios, id, cvObject) {
    return axios.$put(`/cv/${id}`, cvObject)
        .then(res => res)
        .catch(xhr => xhr);
}