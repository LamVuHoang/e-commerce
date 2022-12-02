import Repository from "./repository";

class AuthenticationService {
    async getUserInfo() {
        const endpoint = "/user-information";
        const response = await Repository.get(endpoint);
        return response;
    }
    async logInUser(data: Login) {
        const endpoint = "/signin";
        const response = await Repository.post(endpoint, data);
        return response;
    }
    async signUpUser(data: {
        username: string;
        password: string;
        password_confirmation: string;
    }) {
        const endpoint = "/signup";
        const response = await Repository.post(endpoint, data);
        return response;
    }
    async logOutUser() {
        const endpoint = "/signout";
        const response = await Repository.post(endpoint);
        return response;
    }
}

export default new AuthenticationService();
