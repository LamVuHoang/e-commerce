const initialState = 'unloaded';

const index = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return action.payload;
        case "REMOVE_TOKEN":
            return null;
        default:
            return state;
    }
};

export default index;
