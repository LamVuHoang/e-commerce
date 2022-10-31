import Repository from "./repository";

class UserService {
    async getUserInfo() {
        const endpoint = "/user-information";
        const response = await Repository.get(endpoint);
        return response;
    }
    async logInUser(data) {
        const endpoint = "/login";
        const response = await Repository.post(endpoint, data)
        return response;
    }
}

export default new UserService();
