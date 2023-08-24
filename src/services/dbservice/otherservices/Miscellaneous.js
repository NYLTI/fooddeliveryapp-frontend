import httpClient from "../../httpclientmain/httpmain"

const addReview = (review) => {
    return httpClient.post(`/ms/feedback/add`, review)
}
const getAllVendors = () =>{
    return httpClient.get("/ms/vendor/all")
 }

 const miscellaneousFunctions = {
    addReview, getAllVendors
 }

export default miscellaneousFunctions