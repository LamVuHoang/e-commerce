const initialState = null;

const index = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            console.log(action.payload);
            return action.payload;
        case "REMOVE_TOKEN":
            localStorage.removeItem("token");
            return null;
        default:
            return state;
    }
};

export default index;
