import httpClient from "../../httpclientmain/httpmain"

const loginCustomer = customer =>{
    return httpClient.post('/customer/login', customer)
}

const loginVendor = vendor =>{
    return httpClient.post('/ms/vendor/login', vendor)
}

const loginAdmin = admin =>{
    return httpClient.post('/admin/login', admin)
}

const loginFunctions = {
    loginVendor, loginCustomer, loginAdmin
};

export default loginFunctions