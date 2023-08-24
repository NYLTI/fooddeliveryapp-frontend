import React from "react";

import UserProfile from "./UserProfile";
import VendorProfile from "./VendorProfile";
import { NavLink } from 'react-router-dom';
import AdminProfile from "./AdminProfile";
import FoodPage from "../foodpage/FoodPage"

function Profile() {
    var currentUser = localStorage.getItem("currentUser")
    if ((currentUser != null) && !(currentUser === "LOGGEDOUT")) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }
    return (
        <div>
            {(currentUser == null || currentUser === "LOGGEDOUT") ? (
                <h1>
                    Please <NavLink to="/login" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontSize: 35
                    }} >
                        LOGIN
                    </NavLink> to view profile
                    <FoodPage/>
                </h1>
            ) :
                ((currentUser.userType === "customer") ? (
                    <div>
                        <h1> WELCOME {currentUser.user.userName} </h1>
                        <UserProfile
                            user={currentUser.user} />
                    </div>
                ) :
                    ((currentUser.userType === "vendor") ? (
                        <div>
                            <h1> WELCOME {currentUser.user.userName}</h1>
                            <VendorProfile
                                user={currentUser.user} />
                        </div>
                    ) :
                        (
                            <div>
                                <h1> WELCOME {currentUser.user.userName}</h1>
                                <AdminProfile
                                user={currentUser.user} />
                            </div>
                        )
                    )
                )}
        </div>
    )
}

export default Profile

/* 
import React from "react";

import UserProfile from "./UserProfile";
import Food from '../../Food'
import VendorProfile from "./VendorProfile";
import { NavLink } from 'react-router-dom';
import AdminProfile from "./AdminProfile";

function Profile() {
    var currentUser = localStorage.getItem("currentUser")
    if ((currentUser != null) && !(currentUser === "LOGGEDOUT")) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }
    return (
        <div>
            {(currentUser == null || currentUser === "LOGGEDOUT") ? (
                <h1>
                    Please <NavLink to="/login" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontSize: 35
                    }} >
                        LOGIN
                    </NavLink> to view profile
                    <Food />
                </h1>
            ) :
                ((currentUser.userType === "customer") ? (
                    <div>
                        <h1> WELCOME {currentUser.user.userName} </h1>
                        <UserProfile
                            user={currentUser.user} />
                    </div>
                ) :
                    ((currentUser.userType === "vendor") ? (
                        <div>
                            <h1> WELCOME {currentUser.user.userName} ... VENDOR </h1>
                            <VendorProfile
                                user={currentUser.user} />
                        </div>
                    ) :
                        (
                            <div>
                                <h1> WELCOME {currentUser.user.userName} ... ADMIN </h1>
                                <AdminProfile
                                user={currentUser.user} />
                            </div>
                        )
                    )
                )}
        </div>
    )
}

export default Profile */

/* 
import React from "react";

import PersonalProfile from "./PersonalProfile";
import Food from '../../Food'

function Profile() {
    var user = localStorage.getItem("currentUser")
    if((user != null) && !(user === "LOGGEDOUT")){
        user = JSON.parse(localStorage.getItem("currentUser"))
    }

    return (
        <div>
            {(user == null || user === "LOGGEDOUT") ? (
                <h1>
                    Please log in to view profile
                    <Food/>
                </h1>
            ) : (
                <div>
                    <h1> WELCOME {user.userName} to your Profile Page </h1>
                    <PersonalProfile user={user}/>
                </div>
            )}
        </div>
    )
}

export default Profile */