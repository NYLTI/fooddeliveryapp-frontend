import * as React from 'react';
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
import foodFunctions from '../../../services/dbservice/foodservices/FoodFunctions';

const currentUser = localStorage.getItem("currentUser")
const foods = await foodFunctions.getDiscountedFoods()


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  // const logState = useSelector(state => state) -- I'm going to use this later to show 
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', maxWidth: 100 } }}>
        <TableCell align='left' sx={{ maxWidth: 100 }} >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
        <TableCell sx={{ fontSize: 35, color: "#FFFFFF" }} component="th" scope="row" align='left'>
          {row.foodName}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>{row.vendorName}</TableCell>
        <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>{row.price}</TableCell>
        <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>{row.discount}</TableCell>
        {/* <TableCell align="center" sx={{ fontSize: 30, color: "#FFFFFF" }}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon style={{ visibility: ((currentUser !== null && !(currentUser === "LOGGEDOUT"))) ? 'visible' : 'hidden' }} sx={{ fontSize: 35, color: "#FFFFFF" }}/>
          </IconButton >
        </TableCell> */}
      </TableRow>
    </React.Fragment>
  );
}
export default function CollapsibleTable() {
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
             {/*  <TableCell align="center" sx={{ fontSize: 40, color: "#FFFFFF" }}>Actions&nbsp;</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {(foods.data).map((food) => (
              <Row key={food.name} row={food} />
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




