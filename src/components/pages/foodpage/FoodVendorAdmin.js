import * as React from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import miscellaneousFunctions from '../../../services/dbservice/otherservices/Miscellaneous'
import { Form, Button } from "react-bootstrap";

let currentUser = localStorage.getItem("currentUser")
if ((currentUser != null) && !(currentUser === "LOGGEDOUT")) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"))
}

const owners = await miscellaneousFunctions.getAllVendors()

function Row(props) {
    async function postReview() {
        const feedback = {
            reviewer: currentUser.user.userName,
            // rating: document.getElementById("rating").value,
            body: document.getElementById(row.userName).value,
            vendorName: row.userName
        }
        const result = await miscellaneousFunctions.addReview(feedback)
        window.location.reload()
        return result

    }
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState();
    return (
        <React.Fragment sx={{ '& > *': { borderBottom: 'unset', maxWidth: 100 } }}>
            <TableRow sx={{ '& > *': { borderBottom: 'unset', maxWidth: 1000 } }}>
                <TableCell align='center' sx={{ maxWidth: 100, color: "#FFFFFF"  }} >
                    <IconButton  sx={{ maxWidth: 100, color: "#FFFFFF"  }}
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>{/* <Box
                        component={"img"} sx={{
                            height: 120,
                            width: 150,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        onClick={() => setOpen(!open)}
                        alt="no real alt"
                        
                    ></Box> */}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 30 }}>{row.name}</TableCell>
                <TableCell align="center"sx={{ fontSize: 30 }}>{row.phoneNumber}</TableCell>
                <TableCell align="center" sx={{ fontSize: 30 }}>{row.address}</TableCell>
                {/* <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>
                    {/* <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon style={{ visibility: !(currentUser.userType === "customer") ? 'visible' : 'hidden' }} sx={{ fontSize: 40, color: "#FFFFFF" }}
                        a href="/reviews"/>
                    </IconButton> 
                   <input
                        // label=
                        type="text"
                        placeholder="Please leave review"
                        // style={{ align: "center" }}
                        style={{ visibility: ((currentUser !== null && !(currentUser.user.userName === "null"))) ? 'visible' : 'hidden' }}
                        id={row.userName}
                        required
                    /><br />
                    <Button 
                    style={{ width:"40%", visibility: ((currentUser !== null && !(currentUser.user.userName === "null"))) ? 'visible' : 'hidden' }}
                    // style={{ width: "40%" }}
                     onClick={() => postReview()} >SUBMIT</Button>
                </TableCell> */}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Reviews
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' sx={{ fontSize: 30 }}>Customer</TableCell>
                                        <TableCell align="center" sx={{ fontSize: 30 }}>Review Content</TableCell>
                                        <TableCell align="center" sx={{ fontSize: 30 }}>Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(row.reviews).map((review) => (
                                        <TableRow key={review.id}>
                                            <TableCell align='center' sx={{ fontSize: 25 }} >{review.reviewer}</TableCell>
                                            <TableCell align="center" sx={{ fontSize: 25 }}>{review.body}</TableCell>
                                            <TableCell align="center" sx={{ fontSize: 25 }}>
                                                <Rating 
                                                    name="read-only"
                                                    value={review.rating} readOnly
                                                /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
export default function CollapsibleTable() {
    return (
        <div /* style={{ "background-image": `url(/food4.jpeg)`, "background-color": "hsla(0, 0%, 0%, 0.8)", "class": "mask" }} */ >
        <TableContainer component={Paper} sx={{ backgroundColor: "inherit" }} >
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow>
                        <TableCell />
                        <TableCell align='center' sx={{ fontSize: 40 }} >Name</TableCell>
                        <TableCell align='center' sx={{ fontSize: 40 }}>Phone Number</TableCell>
                        <TableCell align="center" sx={{ fontSize: 40 }}>Address&nbsp;</TableCell>
                        {/* <TableCell align="center" sx={{ fontSize: 40, color: "#FFFFFF" }}>Actions&nbsp;</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(owners.data).map((owner) => (
                        <Row key={owner.userName} row={owner} />
                    ))}
                    <div>
                        <div className='four wide column'>
                            <div className='ui link cards'>
                                <div className='card'>
                                    <div className='image'>
                                    </div>
                                    <div className='content'>
                                        <div className='header'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

