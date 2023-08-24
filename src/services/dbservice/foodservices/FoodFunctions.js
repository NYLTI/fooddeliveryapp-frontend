import httpClient from "../../httpclientmain/httpmain"

const getAllFood = () => {
    return httpClient.get(`/food/all`)
}

const addFood = food => {
    return httpClient.post("/food/add", food)
}

const updateFood = (food, id) => {
    return httpClient.put(`/food/update/${id}`, food)
}

const deleteFood = id => {
    return httpClient.delete(`/food/delete/${id}`)
}

const getDiscountedFoods = id => {
    return httpClient.get(`/food/discount`)
}

const getCart = ids =>{
    return httpClient.get(`/food/getcart/${ids}`)
}

const foodFunctions = {
    getAllFood, addFood, updateFood, deleteFood, getDiscountedFoods, getCart
}


export default foodFunctions