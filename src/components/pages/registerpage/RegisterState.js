import React from "react";
import { useSelector } from "react-redux";

function RegisterState(props) {
    const registerState = useSelector(state => state.reg)
    return (
        <div>
            {registerState}
            {/* {registerState ?(
                <div>
                    Congrats ...!
                    Use coupond code 56756HJ
                </div>
            ):(
                <div>
                    Please log in for discount
                </div>
            )} */}
        </div>
    )
}

export default RegisterState