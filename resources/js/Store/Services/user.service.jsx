import Repository from "./repository";

class UserService {
    async getUserInfo() {
        const endpoint = "/user-test";
        const response = await Repository.get(endpoint);
        return response;
    }
}

export default new UserService();
