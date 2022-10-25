const noAvatar =
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9";

export function fetchUser() {
    return async (dispatch) => {
        let token = localStorage.getItem("token");
        const url = "http://localhost:8000/api/user-information";
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        axios
            .get(url, config)
            .then((response) => {
                // console.log("res message", response.data.message);
                dispatch({
                    type: "UPDATE_USER",
                    payload: {
                        userName: response.data.message.username,
                        fullName:
                            response.data.message.first_name +
                            " " +
                            response.data.message.last_name,
                        avatar: response.data.message.avatar || noAvatar,
                        role: response.data.message.role,
                    },
                });
                // console.log("data", data);
            })
            .catch((error) => {
                let message = error.response.data.message;
                localStorage.removeItem("token");
                dispatch({ type: "REMOVE_TOKEN" });
            });
    };
}
