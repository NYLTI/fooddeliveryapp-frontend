import React from "react";

import { Paper, Button, Stack } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import "../../styles/Food.css"
import { NavLink } from 'react-router-dom';
import { PhotoSizeSelectActual } from "@mui/icons-material";
import AspectRatio from '@mui/joy/AspectRatio';
import LogMain from "../logpage/LogMain";
import RegisterMain from "../registerpage/RegisterMain";

let currentUser = localStorage.getItem("currentUser")
if ((currentUser != null) && !(currentUser === "LOGGEDOUT")) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"))
}

function FoodMain(props) {
    return (
        <div className="product-carousel-container" >
            <Carousel>
                <Paper>
                    <div className="product-card-container">
                        <div className="product-card" style={{ "background-image": `url(/foodbg.jpg)`}} >
                            <div className="product-detail">
                                {/* <div className="product-name"> */}
                                    <Stack spacing={10}>
                                    <Button variant="contained" style={{ minWidth: "100px", visibility: (!(currentUser !== null && !(currentUser === "LOGGEDOUT"))) ? 'visible' : 'hidden' }} href="/login">
                                                LOGIN
                                            </Button>
                                            <Button variant="contained" style={{ minWidth: "100px",  visibility: (!(currentUser !== null && !(currentUser === "LOGGEDOUT"))) ? 'visible' : 'hidden' }} href="/register">
                                                REGISTER
                                            </Button>
                                            </Stack>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </Paper>
            </Carousel>
        </div>
    )
}

export default FoodMain