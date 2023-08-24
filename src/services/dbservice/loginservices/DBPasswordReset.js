import httpClient from "../../httpclientmain/httpmain"

const resetAdminPass = (adminEmail, adminUsername,  pass) =>{
    return httpClient.put(`/admin/reset/${pass}`, {userName:adminUsername, email:adminEmail})
}

const resetCustomerPass = (customerEmail, customerUserName,  pass) =>{
    return httpClient.put(`/customer/reset/${pass}`, {userName:customerUserName, email:customerEmail})
}

const resetVendorPass = (vendorEmail, vendorUserName,  pass) =>{
    return httpClient.put(`/ms/vendor/reset/${pass}`, {userName:vendorUserName, email:vendorEmail})
}

const passResetFunctions = {
    resetAdminPass, resetCustomerPass, resetVendorPass
}

export default passResetFunctions