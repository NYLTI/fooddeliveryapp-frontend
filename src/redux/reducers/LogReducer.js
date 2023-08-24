const LogReducer = (state = "LOGGEDOUT", action) => {
    switch (action.type) {
        case "LOGGEDIN":
            // state = true
            localStorage.setItem("currentUser", JSON.stringify(action))
            window.location.href = "/profile"
            break
        case "CANCELLOGIN":
            state = false
            window.location.href = "/"
            break
        case "LOGINFAILED":
            state = false
            break
        case "PLEASEFILLOUTALLFIELDS":
            state = false
            break
        case "CANCELRESET":
            state = false
            window.location.href = "/login"
            break
        case "PASSWORDRESET":
            state = false
            window.location.href = "/login"
            break
        case "PASSWORDRESETFAILED":
            state = false
            break;
        case "LOGGEDOUT":
            state = false;
            window.location.href = "/logout"
            break
        default:
            break;
    }
    return state
}
export default LogReducer