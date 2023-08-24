/* import registerFunctions from "../../services/dbservice/registerservices/DBRegistration"
var type = ""
export const cancelregister = () => {
    return {
        type: "CANCELREGISTER",
    }
}
export const register = (e) => {
    e.preventDefault()
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
        phoneNumber: document.getElementById('phone').value,
        userName: document.getElementById('username').value
    }
    return async function (dispatch) {
        if (document.getElementById('vc').value === "customer") {
            await registerCustomer() 
        }else if(document.getElementById('vc').value === "vendor"){
            await registerVendor()
        }else{
            await registerAdmin()
        }
        dispatch({
            type: type
        })
    }
    async function registerCustomer() {
       await registerFunctions.registerCustomer(user)
            .then((res) => {
                type = res.data
                console.log("data from regi" + type)
                if (res.data === "REGISTERED") {
                } else if (res.data === "USERALREADYEXIST") {
                    alert("UserName Already Exist, choose a different name")
                }
            })
    }
    async function registerVendor() {
        await registerFunctions.registerVendor(user)
             .then((res) => {
                 type = res.data
                 console.log("data from regi" + type)
                 if (res.data === "REGISTERED") {
                 } else if (res.data === "USERALREADYEXIST") {
                     alert("UserName Already Exist, choose a different name")
                 }
             })
     }
     async function registerAdmin() {
        await registerFunctions.registerAdmin(user)
             .then((res) => {
                 type = res.data
                 console.log("data from regi" + type)
                 if (res.data === "REGISTERED") {
                 } else if (res.data === "USERALREADYEXIST") {
                     alert("UserName Already Exist, choose a different name")
                 }
             })
     }
}

/* 
import axios from "axios"


const customerURL = 'http://localhost:8090/customer/register'
const vendorURL = 'http://localhost:8070/vendor/register'
const adminURL = 'http://localhost:8060/admin/register'
var type = ""
var URL
export const cancelregister = () => {
    return {
        type: "CANCELREGISTER",
    }
}
export const register = (e) => {
    e.preventDefault()
    return async function (dispatch) {
        
        if (document.getElementById('vc').value === "customer") {
            URL = customerURL
        } else if (document.getElementById('vc').value === "vendor") {
            URL = vendorURL
        }else{
            URL = adminURL
        }
        await axios.post(URL, {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            address: document.getElementById('address').value,
            phoneNumber: document.getElementById('phone').value,
            userName: document.getElementById('username').value
        })
            .then((res) => {
                type = res.data
                if (res.data === "PLEASEFILLOUTALLFIELDS") {
                    alert("All fields must be filled out to register")
                } else if (res.data === "REGISTERED") {
                } else if (res.data === "USERALREADYEXIST") {
                    alert("UserName Already Exist, choose a different name")
                }
            })
        dispatch({
            type: type
        })
    }
}

 */ 

import registerFunctions from "../../services/dbservice/registerservices/DBRegistration"
import cartFunctions from "../../services/dbservice/cartservices/CartFunctions"
var type = ""
export const cancelregister = () => {
    return {
        type: "CANCELREGISTER",
    }
}
export const register = (e) => {
    e.preventDefault()
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
        phoneNumber: document.getElementById('phone').value,
        userName: document.getElementById('username').value
    }
    const cart = {
        id: document.getElementById('username').value,
        itemIds: []
    }
    return async function (dispatch) {
        if (document.getElementById('vc').value === "customer") {
            await registerCustomer()
            //cart is created as soon as user registers. unique id for the cart is the user's userName
            await createCart()

        } else if (document.getElementById('vc').value === "vendor") {
            await registerVendor()
        } else {
            await registerAdmin()
        }
        dispatch({
            type: type
        })
    }
    async function registerCustomer() {
        await registerFunctions.registerCustomer(user)
            .then((res) => {
                type = res.data
                console.log("data from regi" + type)
                if (res.data === "REGISTERED") {
                } else if (res.data === "USERALREADYEXIST") {
                    alert("UserName Already Exist, choose a different name")
                }
            })
    }
    async function registerVendor() {
        await registerFunctions.registerVendor(user)
            .then((res) => {
                type = res.data
                console.log("data from regi" + type)
                if (res.data === "REGISTERED") {
                } else if (res.data === "USERALREADYEXIST") {
                    alert("UserName Already Exist, choose a different name")
                }
            })
    }
    async function registerAdmin() {
        await registerFunctions.registerAdmin(user)
            .then((res) => {
                type = res.data
                console.log("data from regi" + type)
                if (res.data === "REGISTERED") {
                } else if (res.data === "USERALREADYEXIST") {
                    alert("UserName Already Exist, choose a different name")
                }
            })
    }
    async function createCart() {
        console.log("Creating cart")
        await cartFunctions.addNewCart(cart)
            .then((res) =>{
                console.log("Cart created " +res.data)
            })
    }
}
//LINE 40 HERE
                //     URL = customerURL
            // } else if (document.getElementById('vc').value === "vendor") {
            //     URL = vendorURL
            // }else{
            //     URL = adminURL
            // }

            // await axios.post(URL, user)
            //         .then((res) => {
            //         type = res.data
            //         if (res.data === "PLEASEFILLOUTALLFIELDS") {
            //             alert("All fields must be filled out to register")
            //         } else if (res.data === "REGISTERED") {
            //         } else if (res.data === "USERALREADYEXIST") {
            //             alert("UserName Already Exist, choose a different name")
            //         }
            //     }
            //     )

    // return {
    //     type: type,
    //     name: document.getElementById('name').value,
    //     email: document.getElementById('email').value,
    //     password: document.getElementById('password').value,
    //     address: document.getElementById('address').value,
    //     phone: document.getElementById('phone').value,
    //     userName: document.getElementById('username').value
    // }

    // function addUser() {
    //     return new Promise((resolve) => {
    //         getStatus(() => {
    //             resolve({
    //                 type: "REGISTERED"
    //             })
    //         })
    //     })
    // }
    // function getStatus() {

    //     axios.post(URL, {
    //         name: document.getElementById('name').value,
    //         email: document.getElementById('email').value,
    //         password: document.getElementById('password').value,
    //         address: document.getElementById('address').value,
    //         phone: document.getElementById('phone').value,
    //         userName: document.getElementById('username').value
    //     })
    //         .then((res) => {
    //             type = res.data
    //             if (res.data === "REGISTERED") {
    //             } else if (res.data === "USERALREADYEXIST") {
    //                 alert("UserName Already Exist, choose a different name")
    //             }
    //         })
    // }
    // function ret() {
    //     return new Promise((resolve) => {

    //     })

    // axios.post(URL, {
    //     name: document.getElementById('name').value,
    //     email: document.getElementById('email').value,
    //     password: document.getElementById('password').value,
    //     address: document.getElementById('address').value,
    //     phone: document.getElementById('phone').value,
    //     userName: document.getElementById('username').value
    // })
    //     .then((res) => {
    //         type = res.data
    //         if (res.data === "REGISTERED") {
    //         } else if (res.data === "USERALREADYEXIST") {
    //             alert("UserName Already Exist, choose a different name")
    //         }
    //     })
    //     return {
    //         type: type,
    //         name: document.getElementById('name').value,
    //         email: document.getElementById('email').value,
    //         password: document.getElementById('password').value,
    //         address: document.getElementById('address').value,
    //         phone: document.getElementById('phone').value,
    //         userName: document.getElementById('username').value
    //     }
// }
// export const register = (e) => {
//     e.preventDefault()
//     axios.post(URL, {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value,
//         address: document.getElementById('address').value,
//         phone: document.getElementById('phone').value,
//         userName: document.getElementById('username').value
//     })
//         .then((res) => {
//             console.log(res.data)
//             if (res.data === "registered") {
//             } else if (res.data === "username already exist") {
//                 alert("UserName Already Exist, choose a different name")
//             }
//         }).then(ret())
//     function ret(){
//         return {
//             type: "REGISTERED",
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             password: document.getElementById('password').value,
//             address: document.getElementById('address').value,
//             phone: document.getElementById('phone').value,
//             userName: document.getElementById('username').value
//         }
//     }

// }


 