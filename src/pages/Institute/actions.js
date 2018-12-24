export const fetchInstitutesData = (data) => ({
    type: 'FETCH_INSTITUTES_DATA',
    payload: data
});

export const createInstitute = (currentData, newEntry) => {
    currentData.push(newEntry);
    return {
        type: 'CREATE_INSTITUTE',
        payload: currentData
    }
};

export const changeInstitute = (allInstitutes, index, newDescription) => {
    allInstitutes[index].description = newDescription;
    return {
        type: 'CHANGE_INSTITUTE',
        payload: allInstitutes
    }
};

export const removeInstitute = (allInstitutes, index) => {
    allInstitutes.splice(index, 1);
    return {
        type: 'REMOVE_INSTITUTE',
        payload: allInstitutes
    }
};
