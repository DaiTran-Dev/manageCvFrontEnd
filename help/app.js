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


/**
 * Convert option query .
 *
 * @param {Object} optionQueries
 * @return {string} name.
 */
export function convertOptionQueries(optionQueries = {}) {
    var filteredFields = {}
    for (const [fied, fiedValue] of Object.entries(optionQueries)) {
        if (Number.isInteger(fiedValue)) {
            filteredFields[fied] = {
                condition: '=',
                value: fiedValue,
            }
        } else if (fiedValue) {
            filteredFields[fied] = {
                condition: 'like',
                value: `%${fiedValue}%`,
            }
        }
    }
    return filteredFields
}
