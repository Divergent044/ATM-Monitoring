const initialState = {
    institutes: []
};

export default function institutesReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_INSTITUTES_DATA":
            return {institutes: action.payload};
        case "CREATE_INSTITUTE":
            return {institutes: action.payload};
        case "CHANGE_INSTITUTE":
            return {institutes: action.payload};
        case "REMOVE_INSTITUTE":
            return {institutes: action.payload};
        default:
            return state
    }
}
