/**
 * Find name from listMaster to id.
 *
 * @param {number} id The Id.
 * @param {Array} listMaster The listMaster is array.
 * @return {string} name.
 */
export function findNameFromListMasterById(id, listMaster = []) {
    var result;
    if (!Array.isArray(listMaster)) {
        return "";
    }
    result = listMaster.find(function (row) {
        return row.id == id;
    });
    if (result) {
        return result.name;
    }
    return "";
}
