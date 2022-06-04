import { userConstants } from "./constants";
import axios from "../../helpers/axios";

export const signup = (user) => {

    return async(dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post('/auth/Signup', {
            ...user
        });

        if (res.status === 200) {
            console.log(res);
            const {message} = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {message}
            })
        }
        if (res.status === 400) {
            console.log(res);
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }

    }
}


