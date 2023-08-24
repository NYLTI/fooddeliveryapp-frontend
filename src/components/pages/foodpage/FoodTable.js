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
import cartFunctions from '../../../services/dbservice/cartservices/CartFunctions';
import foodFunctions from '../../../services/dbservice/foodservices/FoodFunctions';

let currentUser = localStorage.getItem("currentUser")
if(currentUser !== "LOGGEDOUT"){
  currentUser = JSON.parse(localStorage.getItem("currentUser"))
}else{
  currentUser = {user:{userName : "nill"}}
}
const foods = await foodFunctions.getAllFood()

function Row(props) {
  async function updateCart() {
    const owners = await cartFunctions.getCartByUserName(currentUser.user.userName)
    owners.data.itemIds = owners.data.itemIds.concat(row.foodId)
    const added = await cartFunctions.updateCart(owners.data.itemIds, currentUser.user.userName)
    alert("Item added to cart")
    return added
  }
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment sx={{ '& > *': { borderBottom: 'unset', maxWidth: 100 } }}>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', maxWidth: 1000 } }}>
        <TableCell align='center' sx={{ maxWidth: 100 }} >
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
            onClick={() => setOpen(!open)}
            alt="no real alt"
            src={row.foodImage}
          ></Box>
        </TableCell>
        <TableCell sx={{ fontSize: 25 }} component="th" scope="row" align='center'>
          {row.foodName}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: 25 }}>{row.vendorName}</TableCell>
        <TableCell align="center" sx={{ fontSize: 25, maxWidth: 20 }}>{row.price}</TableCell>
        <TableCell align="center" sx={{ fontSize: 25 }}>
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon
              onClick={() => updateCart()}
              style={{ visibility: ((currentUser !== null && !(currentUser === "LOGGEDOUT") && (currentUser.userType==="customer"))) ? 'visible' : 'hidden' }} />
          </IconButton>
        </TableCell>
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
                    <TableCell align='center' sx={{ fontSize: 30}}>Customer</TableCell>
                    <TableCell align="center" sx={{ fontSize: 30}}>Body</TableCell>
                    <TableCell align="center" sx={{ fontSize: 30}}>Stars</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {(reviews.data).map((review) => (
                    <TableRow key={review.customerName}>
                      <TableCell align='center' >{review.customerUserName}</TableCell>
                      <TableCell align="center">{review.body}</TableCell>
                      <TableCell align="center">{review.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
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
    <TableContainer component={Paper} sx={{ backgroundColor: "inherit" }} >
      <Table aria-label="collapsible table">
        <TableHead >
          <TableRow>
            <TableCell />
            <TableCell align='center' sx={{ fontSize: 40, maxWidth: 30 }} >Name</TableCell>
            <TableCell align='center' sx={{ fontSize: 40 }}>Vendor</TableCell>
            <TableCell align="center" sx={{ fontSize: 40 }}>Cost&nbsp;($)</TableCell>
            <TableCell align="center" sx={{ fontSize: 40 }}>Actions&nbsp;</TableCell>
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
  );
}



/* import * as React from 'react';
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
import foodFunctions from '../../../services/dbservice/foodservices/FoodFunctions';


const menu = await foodFunctions.getAllFood()

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='left' sx={{ maxWidth: 100 }} >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton><Box
            component={"img"} sx={{
              height: 150,
              width: 150,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            onClick={() => setOpen(!open)}
            alt="no real alt"
            src="/food1.jpg"
          ></Box>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ fontSize: 30 }} align="center">
          {row.foodName}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: 30 }}>{row.vendorName}</TableCell>
        <TableCell align="center" sx={{ fontSize: 30 }}>{row.price}</TableCell>
        <TableCell align="center" sx={{ fontSize: 30 }}> <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton></TableCell>
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
                    <TableCell align='center' sx={{ fontSize: 30}}>Customer</TableCell>
                    <TableCell align="center" sx={{ fontSize: 30}}>Body</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.reviews.map((review) => (
                    <TableRow key={review.customerName}>
                      <TableCell align='center' sx={{ fontSize: 20}}>{review.customerName}</TableCell>
                      <TableCell align="center" sx={{ fontSize: 20}}>{review.body}</TableCell>
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

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };



export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "inherit" }}>
      <Table aria-label="collapsible table">
        <TableHead >
          <TableRow>
            <TableCell />
            <TableCell align="center" sx={{ fontSize: 40}} >Name</TableCell>
            <TableCell align="center" sx={{ fontSize: 40 }}>Vendor</TableCell>
            <TableCell align="center" sx={{ fontSize: 40 }}>Cost&nbsp;($)</TableCell>
            <TableCell align="center" sx={{ fontSize: 40 }}>Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(menu.data).map((food) => (
            <Row key={food.name} row={food} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */