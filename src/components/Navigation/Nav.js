import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RegisterMain from "../pages/registerpage/RegisterMain";
import Profile from "../pages/profilepage/Profile";
import PageNotFound from "../PageNotFound";
import AppBar from "../AppBar"
import LogMain from "../pages/logpage/LogMain";
import ForgotPassword from "../pages/logpage/ForgotPassword";
import LogOut from "../pages/logpage/LogOut";
import FoodPage from "../pages/foodpage/FoodPage";
import FoodSales from "../pages/foodpage/FoodSales";
import FoodVendor from "../pages/foodpage/FoodVendor";
import Reviews from "../pages/reviewpage/Reviews";
import ReviewForm from "../pages/reviewpage/ReviewForm";
import CartMain from "../pages/utilitiespage/CartMain";

function routes(){
    return(
        <div>   
            <BrowserRouter>
                <div>
                    <AppBar/>
                    <Switch>
                        <Route path = '/login' component = {LogMain} exact = {true}/>
                        <Route path = '/logout' component = {LogOut} exact = {true}/>
                        <Route path = '/forgotpassword' component = {ForgotPassword} exact = {true}/>
                        <Route path = '/register' component = {RegisterMain} exact = {true}/>
                        <Route path = '/profile' component = {Profile} exact = {true}/>
                        <Route path = '/' component = {FoodPage} exact = {true}/>
                        <Route path = '/sales' component = {FoodSales} exact = {true}/>
                        <Route path = '/vendor' component = {FoodVendor} exact = {true}/>
                        <Route path = '/reviews' component = {ReviewForm} exact = {true}/>
                        <Route path = '/cart' component = {CartMain} exact = {true}/>
                        <Route path = "" component = {PageNotFound} exact = {true}/>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        </div>
    )
}

export default routes