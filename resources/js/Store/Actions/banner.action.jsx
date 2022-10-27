import { bannerConstants, exceptionConstants } from "../Constants";
import bannerService from "../Services/banner.service";

export const getAllBanner = () => {
    return async (dispatch) => {
        const response = await bannerService.getAllBanner();
        if (response.code === exceptionConstants.SUCCESS) {
            dispatch({
                type: bannerConstants.GET_ALL_BANNER,
                payload: {
                    data: response.data,
                },
            });
        }
        return response;
    };
};
