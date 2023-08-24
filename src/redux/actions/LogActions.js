
import loginFunctions from "../../services/dbservice/loginservices/DBLogin"
import passResetFunctions from "../../services/dbservice/loginservices/DBPasswordReset"

var type = ""
var user
var userType

export const login = (e) => {
    e.preventDefault()
    const loggingUser = {
        password: document.getElementById('password').value,
        userName: document.getElementById('username').value
    }
    return async function (dispatch) {
        if (document.getElementById('vc').value === "customer") {
            await loginCustomer()
            userType = "customer"
        } else if (document.getElementById('vc').value === "vendor") {
            await loginVendor()
            userType = "vendor"
        } else {
            await loginAdmin()
            userType = "admin"
        }
        dispatch({
            type: type,
            userName: document.getElementById("userName"),
            user: user,
            userType: userType
        })
        async function loginCustomer() {
            await loginFunctions.loginCustomer(loggingUser)
                .then((res) => {
                    if (!(res.data === "")) {
                        user = res.data
                        type = "LOGGEDIN"
                    } else {
                        alert("Login Failed")
                        type = "LOGINFAILED"
                    }
                })
        }
        async function loginVendor() {
            await loginFunctions.loginVendor(loggingUser)
                .then((res) => {
                    if (!(res.data === "")) {
                        user = res.data
                        type = "LOGGEDIN"
                    } else {
                        alert("Login Failed")
                        type = "LOGINFAILED"
                    }
                })
        }
        async function loginAdmin() {
            await loginFunctions.loginAdmin(loggingUser)
                .then((res) => {
                    if (!(res.data === "")) {
                        user = res.data
                        type = "LOGGEDIN"
                    } else {
                        alert("Login Failed")
                        type = "LOGINFAILED"
                    }
                })
        }
    }
}
export const cancellogin = () => {
    return {
        type: "CANCELLOGIN",
    }
}
export const cancelreset = () => {
    return {
        type: "CANCELRESET",
    }
}


//resetting password
export const customerresetlogin = (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const userName = document.getElementById('username').value
    const newPass = document.getElementById('password').value
    return async function (dispatch) {
        if (document.getElementById('vc').value === "customer") {
            await resetCustomerPassword()
        } else if (document.getElementById('vc').value === "vendor") {
            await resetVendorPassword()
        }else{
            await resetAdminPassword()
        }
        dispatch({
            type: type,
        })
    }
    async function resetCustomerPassword() {
        await passResetFunctions.resetCustomerPass(email, userName, newPass).then((res) => {
            if (res.data === "PASSWORDRESET") {
                type = "PASSWORDRESET"
            } else {
                type = "PASSWORDRESETFAILED"
                alert("PASSWORD RESET FAILED")
            }
        })
    }
    async function resetVendorPassword() {
        await passResetFunctions.resetVendorPass(email, userName, newPass).then((res) => {
            if (res.data === "PASSWORDRESET") {
                type = "PASSWORDRESET"
            } else {
                type = "PASSWORDRESETFAILED"
                alert("PASSWORD RESET FAILED")
            }
        })
    }
    async function resetAdminPassword() {
        await passResetFunctions.resetAdminPass(email, userName, newPass).then((res) => {
            if (res.data === "PASSWORDRESET") {
                type = "PASSWORDRESET"
            } else {
                type = "PASSWORDRESETFAILED"
                alert("PASSWORD RESET FAILED")
            }
        })
    }
}
export const logout = () => {
    return {
        type: "LOGOUT",
    }
}


/* import axios from "axios"


const customerURL = 'http://localhost:8090/customer/login'
const vendorURL = 'http://localhost:8070/vendor/login'
const customerresetURL = 'http://localhost:8090/customer/reset/'
const vendorresetURL = 'http://localhost:8070/vendor/reset/'
const adminURL = 'http://localhost:8060/admin/login'
var type = ""
var URL
var user
var userType

export const cancellogin = () => {
    return {
        type: "CANCELLOGIN",
    }
}

export const customerresetlogin = (e) => {
    e.preventDefault()
    return async function (dispatch) {


        if (document.getElementById('vc').value === "customer") {
            URL = customerresetURL + document.getElementById('password').value
        } else  {
            URL = vendorresetURL + document.getElementById('password').value
        }
        await axios.put(URL, {
            email: document.getElementById('email').value,
            userName: document.getElementById('username').value
        })
            .then((res) => {
                if (res.data === "PASSWORDRESET") {
                    type = "PASSWORDRESET"
                } else {
                    type = "PASSWORDRESETFAILED"
                    alert("PASSWORD RESET FAILED")
                }
            })
        dispatch({
            type: type,
        })
    }
}
export const cancelreset = () => {
    return {
        type: "CANCELRESET",
    }
}
export const login = (e) => {
    e.preventDefault()
    return async function (dispatch) {
        if (document.getElementById('vc').value === "customer") {
            URL = customerURL
            userType = "customer"
        } else if (document.getElementById('vc').value === "vendor"){
            URL = vendorURL
            userType = "vendor"
        }else{
            URL = adminURL
            userType = "admin"
        }
        await axios.post(URL, {
            password: document.getElementById('password').value,
            userName: document.getElementById('username').value
        })
            .then((res) => {
                if (!(res.data === "")) {
                    user = res.data
                    type = "LOGGEDIN"
                } else {
                    alert("Login Failed")
                    type = "LOGINFAILED"
                }
            })
        dispatch({
            type: type,
            userName: document.getElementById("userName"),
            user: user,
            userType: userType
        })
    }
}






 */