import { authTypes } from "../constants/actionTypes";

const authFromLocal = localStorage.getItem("Auth")
const auth = JSON.parse(authFromLocal);
export const authReducer = (state = { auth: auth }, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                auth: true
            }
        case authTypes.LOGOUT:
            return {
                ...state,
                auth: false
            }
        default:
            return state
    }
}