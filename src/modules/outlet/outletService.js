import { endpoints } from "../../constants/endpoints";
import { getRequest, postRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { index } from "./outletSlice";

export const outletService = {
    store: async (payload, dispatch) => {
        const response = await postRequest(endpoints.outlet, payload);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(
                updateNotification({
                    variant: "success",
                    message: response.message,
                })
            );
        }
        return response;
    },
    index: async (dispatch, params) => {
        const response = await getRequest(endpoints.outlet, params);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(
                index(response.data.data ? response.data.data : response.data)
            );
            dispatch(
                updateNotification({
                    variant: "success",
                    message: response.message,
                })
            );
        }
        return response;
    },
};