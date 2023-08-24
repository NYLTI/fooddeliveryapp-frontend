import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/Profile.css'

export default function UserProfile(props) {
  return (
    <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="page shadow">
      <div class="main-container shadow">
        <MDBContainer>
          
          <MDBRow>
            <MDBCol sm={12} md={4}>
              <div class="container">
                <img
                  src="./user.jpg"
                  alt="John"
                  style={{ width: "65%", borderRadius: "100%" }}
                />
                <br />
                <h6 className="m-4" style={{ fontSize: 35}}>User Name </h6>
                <p class="Name" style={{ fontSize: 25}}>
                {props.user.userName}
                    </p>
                <br />
                <a href="#" style={{ fontSize: 35}}>
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" style={{ fontSize: 35}}>
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#" style={{ fontSize: 35}}>
                  <i className="fa fa-facebook" />
                </a>
              </div>
            </MDBCol>

            <MDBCol>
              <MDBContainer>
                <MDBRow>
                  <MDBCol sm={2} lg={2} md={2}>
                    <h6 className="m-4" style={{ fontSize: 35}}>Name </h6>
                  </MDBCol>
                  <MDBCol>
                    <br/>
                    <p class="Name" style={{ fontSize: 25}}>
                      {props.user.name}
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <MDBContainer>
                <MDBRow>
                  <MDBCol sm={2} lg={2} md={2}>
                    <h6 className="m-4" style={{ fontSize: 35}}>Email </h6>
                  </MDBCol>
                  <MDBCol>
                  <br/>
                    <p class="Email" style={{ fontSize: 25}}>
                      {props.user.email}
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <MDBContainer>
                <MDBRow>
                  <MDBCol sm={2} lg={2} md={2}>
                    <h6 className="m-4" style={{ fontSize: 35}}>Phone </h6>
                  </MDBCol>
                  <MDBCol>
                  <br/>
                    <p class="Phone" style={{ fontSize: 25}}>
                      {props.user.phoneNumber}
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <MDBContainer>
                <MDBRow>
                  <MDBCol sm={2} lg={2} md={2}>
                    <h6 className="m-4" style={{ fontSize: 35}}>Address </h6>
                  </MDBCol>
                  <MDBCol>
                  <br/>
                    <p class="Address" style={{ fontSize: 25}}>
                      {props.user.address}
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <MDBContainer>
                <MDBRow>
                  <MDBCol sm={2} lg={2} md={2}>
                    <h6 className="m-4" style={{ fontSize: 35}}>Bio </h6>
                  </MDBCol>
                  <MDBCol>
                  <br/>
                    <p class="bio" style={{ fontSize: 25}}>
                      Hello, bio is under construction...Please check again soon..
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <br />
              <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

     {/*  <div class="bottom-container" style={{ textAlign: "center" }}>
        <h4
          style={{
            paddingBottom: "1%",
            paddingTop: "3%",
            color: "rgb(70, 131, 192)"
          }}
        >
          {" "}
          Order History
        </h4>
        <table>
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
         
        </table>
      </div> */}
    </div>
  </div>
  );
}