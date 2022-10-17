const initialState = null;
const noAvatar =
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9";

const index = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOKEN":
            let token = localStorage.getItem("token");
            const url = "http://localhost:8000/api/user-information";
            const config = {
                headers: {
                    Authorization: "Bearer " + token,
                },
            };
            var userData = null;
            const response = axios
                .get(url, config)
                .then((response) => {
                    // console.log("res message", response.data.message);
                    userData = {
                        userName: response.data.message.user_name,
                        fullName:
                            response.data.message.first_name +
                            " " +
                            response.data.message.last_name,
                        avatar: response.data.message.avatar || noAvatar,
                        role: response.data.message.role,
                    };
                    // console.log("data", data);
                    return userData;
                })
                .catch((error) => {
                    let message = error.response.data.message;
                    // console.log(message);
                    userData = null;
                    return userData;
                });
                console.log(response);
            return userData;
                break;
        case "REMOVE_TOKEN":
            // localStorage.removeItem("token");
            return null;
            break;
        default:
            return state;
    }
};

export default index;
