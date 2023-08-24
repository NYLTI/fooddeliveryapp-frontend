import React from "react";

import RegisterAction from "./RegisterAction"
import RegisterState from "./RegisterState"


function RegisterMain(){
    return(
        <div>
            <RegisterState/>
            <RegisterAction/>
        </div>
    )
}

export default RegisterMain