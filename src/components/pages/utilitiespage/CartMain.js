import React from "react";
import CartErrors from "./CartErrors";

function CartMain() {
    var currentUser = localStorage.getItem("currentUser")
    if ((currentUser != null) && !(currentUser === "LOGGEDOUT")) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }else{
        return(<div>
            
        </div>)
    }
    return (
        <div >
            {(currentUser == null || currentUser === "LOGGEDOUT") ? (
                <div>
                    YOU NEED TO LOG IN TO VIEW CART
                </div>
            ) : (
                <div>
                    <CartErrors 
                    currentUser = {currentUser}/>
                    
                </div>
            )}
        </div>
    )
}
export default CartMain