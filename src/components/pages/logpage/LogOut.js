import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import LogMain from "./LogMain";


function LogOut(){
    const logState = useSelector(state => state.login)
    useEffect(() =>{
        console.log("current user is "+logState)
        localStorage.setItem("currentUser", logState)
    }, [logState])
    return(
        <div>
            <h4>You have been logged out</h4>
            <LogMain/>
        </div>
    )
}

export default LogOut