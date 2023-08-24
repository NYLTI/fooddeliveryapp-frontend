import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import foodFunctions from '../../../services/dbservice/foodservices/FoodFunctions';
import cartFunctions from '../../../services/dbservice/cartservices/CartFunctions';
import { Button } from '@mui/material';
import Checkout from '../foodpage/Checkout';

var currentUser = localStorage.getItem("currentUser")
if ((currentUser != null) && !(currentUser === "LOGGEDOUT")) {
  currentUser = JSON.parse(localStorage.getItem("currentUser"))
}else{
  currentUser = {user:{userName : "nill"}}
}
console.log("user is "+ currentUser.user.userName)
var owners = await cartFunctions.getCartByUserName(currentUser.user.userName)
console.log(currentUser)
console.log(owners)

if(owners.data === ""){
  owners = {data:{itemIds:(0, 0)}}
}
else if(owners.data.itemIds.length===0){
    owners = {data:{itemIds:(0, 0)}}
}
console.log(owners.data)

var cart = await foodFunctions.getCart(owners.data.itemIds)
if(cart.data === ""){
  cart = {data:[0,0]}
}

let totalamount=0
const totalprice = () => {
  for(let i=0 ; i<cart.data.length ; i++){
    totalamount += parseInt(cart.data[i].price - cart.data[i].discount)
    console.log(totalamount, cart.data[i].price, cart.data[i].discount)
  }
  
  return totalamount
}

async function checkout(){
  const newcart = await cartFunctions.resetCart(currentUser.user.userName)
  return newcart
} 

const Row = (props) => {
  const { row } = props;
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', maxWidth: 100 } }}>
        <TableCell align='left' sx={{ maxWidth: 100 }} >
          <IconButton
            aria-label="expand row"
            size="small">
          </IconButton><Box
            component={"img"} sx={{
              height: 120,
              width: 150,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="no real alt"
            src={row.foodImage}
          ></Box>
        </TableCell>
        <TableCell sx={{ fontSize: 35, color: "#FFFFFF" }} component="th" scope="row" align='center'>
          {row.foodName}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>{row.vendorName}</TableCell>
        <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>{row.price}</TableCell>
        <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>{row.discount}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const CollapsibleTable = (props) => {
  return (
    <div style={{ "background-image": `url(/food2.jpg)`, "background-color": "hsla(0, 0%, 0%, 0.8)", "class": "mask" }} >
      <TableContainer component={Paper} sx={{ backgroundColor: "inherit" }} >
        <Table aria-label="collapsible table">
          <TableHead >
            <TableRow>
              <TableCell />
              <TableCell align='center' sx={{ fontSize: 40, color: "#FFFFFF" }} >Name</TableCell>
              <TableCell align='center' sx={{ fontSize: 40, color: "#FFFFFF" }}>Vendor</TableCell>
              <TableCell align="center" sx={{ fontSize: 40, color: "#FFFFFF" }}>Cost&nbsp;($)</TableCell>
              <TableCell align="center" sx={{ fontSize: 40, color: "#FFFFFF" }}>Discount&nbsp;($)</TableCell>
            </TableRow>
            
          </TableHead>
          <TableBody>
            {(cart.data).map((crt) => (
              <Row key={crt.foodName} row={crt} />
            ))}
          </TableBody>
          <TableRow style={{"align":'center'}}>
          <br/><TableCell sx={{ fontSize: 40, color: "#FFFFFF" }} >Total Price</TableCell><br/>
              <TableCell sx={{ fontSize: 40, color: "#FFFFFF" }} >{totalprice()}</TableCell><br/>
              <Button variant="contained"  style={{ width: "100px", height: "50px", color: "#FFFFFF", visibility: (totalprice()<=0) ? 'hidden' : 'visible' }} onClick={checkout} > <Checkout/></Button>
            </TableRow>
        </Table>
      </TableContainer>
     
      
          
      {/* <table>
          <tr>
            <th>Order No.</th>
            <th>Item Name</th>
            <th>Vendor</th>
            <th>Price</th>
            <th>View</th>
          </tr>
          <tr>
            <td>Under Construction</td>
            <td>Under Construction</td>
            <td>Under Construction</td>
            <td>Under Construction</td>
            <td>Under Construction</td>
          </tr>
         
        </table> */}
    </div>
  );
}
export default CollapsibleTable
