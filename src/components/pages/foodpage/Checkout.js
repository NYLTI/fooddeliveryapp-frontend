import { Component } from "react";
import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";


class Checkout extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
      window.location.reload()
    }
    render() {
      return (
        <div>
          <Button sx={{ color: "#FFFFFF" }} onClick={this.handleOpenDialog} raised ripple>
            CHECKOUT
          </Button>
          <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
            <DialogTitle>Order Placed</DialogTitle>
            <DialogContent>
              <p>
                Thank you for ordering. You have a great taste.
              </p>
            </DialogContent>
            <DialogActions>
             {/*  <Button type="button">Agree</Button> */}
              <Button type="button" onClick={this.handleCloseDialog}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  export default Checkout;