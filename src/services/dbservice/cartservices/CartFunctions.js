import httpClient from "../../httpclientmain/httpmain"

const getAllCart = () =>{
   return httpClient.get("/cart/all")
}

const getCartByUserName = userName =>{
    return httpClient.get(`/cart/get/${userName}`)
}

const addNewCart = cart =>{
    return httpClient.post("/cart/add", cart)
}

const updateCart = (cart, id) =>{ 
//     return httpClient.put(`/cart/update/${id}`, cart)
// }
    return httpClient.post(`/cart/update/${id}`, {id:id, itemIds:cart})
}

const resetCart = (id) =>{
    return httpClient.post(`/cart/reset/${id}`)
}

const cartFunctions = {
    getAllCart, getCartByUserName, addNewCart, updateCart, resetCart
}
export default cartFunctions