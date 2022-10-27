import Repository from "./repository";

class BannerService {
    async getAllBanner() {
        const endpoint = "/banner";
        const response = await Repository.get(endpoint);
        return response;
    }
}

export default new BannerService();
