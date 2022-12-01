type AppReponse = {
    code?: number;
    data?: {
        code: number;
        data: {}[];
        message: {}[] | string;
    };
    message?: {}[] | string;
};

export default AppReponse;
