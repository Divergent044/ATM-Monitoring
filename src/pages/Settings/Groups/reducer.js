const initialState = {
    groups: []
};

export default function groupsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_GROUPS_DATA':
            return {groups: action.payload};
        default:
            return state
    }
}
