
const RegisterReducer = (state = [], action) => {
    switch (action.type) {
        case "REGISTERED":
            state = true
            window.location.href = "/login"
            break
        case "CANCELREGISTER":
            window.location.href = "/"
            break
        case "USERALREADYEXIST":
            break
        case "PLEASEFILLOUTALLFIELDS":
            break
        default:
            break;
    }
    return state
}
export default RegisterReducer