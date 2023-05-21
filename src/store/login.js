import { loginTypes} from "../constants/actionTypes"

const initialState = {
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    formValid: false
}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case loginTypes.PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case loginTypes.EMAIL_VALID:
            return {
                ...state,
                emailValid: action.payload.includes("@")
            }
        case loginTypes.PASSWORD_VALID:
            return {
                ...state,
                passwordValid: action.payload.trim().length > 6
            }
        case loginTypes.FORM_VALID:
            return {
                ...state,
                formValid: state.passwordValid && state.emailValid ? true : false
            }
        default:
            return state
    }
}

