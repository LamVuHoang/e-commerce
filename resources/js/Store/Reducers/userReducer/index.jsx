const initialState = {
    userName: "nhonnguyen3112",
    fullName: "Nhon Nguyen Thanh",
    avatar: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
    role: "seller",
};

const index = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOKEN":
            return {
                userName: "nhonnguyen3112",
                fullName: "Nhon Nguyen Thanh",
                avatar: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
                role: "seller",
            };
        case "REMOVE_TOKEN":
            return null;
        default:
            return state;
    }
};

export default index;
