import httpClient from "../../httpclientmain/httpmain"

const registerCustomer = customer =>{
    return httpClient.post('/customer/register', customer)
}

const registerAdmin = admin =>{
    return httpClient.post('/admin/register', admin)
}

const registerVendor = vendor =>{
    return httpClient.post('/ms/vendor/register', vendor)
}

const registerFunctions = {
    registerCustomer, registerAdmin, registerVendor
};

export default registerFunctions