export const login=()=>{
    return{
        type:"LOG_IN"
    }
}
export const logout=()=>{
    return{
        type:"LOG_OFF"
    }
}
export const addList=(e)=>{
    e.preventDefault()
    return{
        type:"ADD",
        item: document.getElementById("item").value
    }
}
// export const register=()=>{
//     return {
//         type: "REGISTER",
//         value: document.getElementById('listvalue').value
//     }
// }
export const cancelregister=()=>{
    return {
        type: "CANCELREGISTER",
        value: document.getElementById('listvalue').value
    }
}