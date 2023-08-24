import httpClient from "../../httpclientmain/httpmain"

const getAllVendors = () =>{
   return httpClient.get("/vendors/all")
}

const disableVendor = userName =>{
    return httpClient.put(`/vendor/disable/${userName}`)
}

const addNewCart = cart =>{
    return httpClient.post("/cart/add", cart)
}

const updateCart = (cart, id) =>{ 
    return httpClient.put(`/cart/update/${id}`, cart)
}

const adminFunctions = {
    getAllVendors, disableVendor, addNewCart, updateCart
}
export default adminFunctions