import axios from "./base.service";

function getToken(): string {
    try {
        return window.localStorage.getItem("token")!;
    } catch {
        return "";
    }
}

class Repository {
    token: string;

    constructor() {
        this.token = "";
    }

    async get(endpoint: string, data?: {}) {
        this.token = getToken();
        const response = await axios
            .get(`${endpoint}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                params: data,
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res.data,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.data.message,
                    data: undefined,
                };
            });
        return response;
    }

    async post(endpoint: string, data?: {}) {
        this.token = getToken();
        const response = await axios
            .post(`${endpoint}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                    // "content-type": "text/json",
                },
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res.data,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.data.message,
                    data: undefined,
                };
            });
        return response;
    }

    async put(endpoint: string, data: {}) {
        this.token = getToken();
        const response = await axios
            .put(`${endpoint}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res.data,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.data.message,
                    data: undefined,
                };
            });
        return response;
    }

    async patch(endpoint: string, data: {}) {
        this.token = getToken();
        const response = await axios
            .patch(`${endpoint}`, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res.data,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.data.message,
                    data: undefined,
                };
            });
        return response;
    }

    async delete(endpoint: string, data: {}) {
        this.token = getToken();
        const response = await axios
            .delete(`${endpoint}`, {
                data: data,
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => {
                return {
                    code: res.status,
                    message: res.statusText,
                    data: res.data,
                };
            })
            .catch((err) => {
                return {
                    code: err.response.status,
                    message: err.response.data.message,
                    data: undefined,
                };
            });
        return response;
    }
}

export default new Repository();
