import React from 'react'
import { useDispatch } from 'react-redux'
import { cancelregister, register } from '../../../redux/actions/RegistrationActions'
import '../../styles/Register.css'
import { FormControl } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Form } from 'react-bootstrap'


/* function RegisterAction(props) {
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className='center'>
                <h1>REGISTER</h1>
                <form onSubmit={(e) => dispatch(register(e))} onReset={(e) => dispatch(cancelregister(e))}>

                    <div>
                        <h2><label for="vc">Vendor or Customer or Admin</label></h2>
                        <select name="vc" id="vc">
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='username' required ></input>
                        <span></span>
                        <label>User Name</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='name' required ></input>
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='email' required  ></input>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type='password' id='password' required ></input>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input type='number' id='phone' required ></input>
                        <span></span>
                        <label>Phone</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='address' required ></input>
                        <span></span>
                        <label>Address</label>
                    </div>
                    <button type='submit' id='submit'>SUBMIT</button><br></br>
                    <button type="reset" id='reset' >CANCEL</button><br></br>
                    <div class="login_link">
                        Have an Account ? <a href="/login">Login Here</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterAction */

function RegisterAction(props) {
    const dispatch = useDispatch()
    return (
        
        <div className='container'>
            <div className='center'>
                <form className="center" onSubmit={(e) => dispatch(register(e))} onReset={(e) => dispatch(cancelregister(e))}>
               
                
                <h1>REGISTER</h1>
                    <div>
                        <h2><label for="vc">Vendor or Customer or Admin</label></h2>
                        <select name="vc" id="vc">
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='username' required></input>
                        <span></span>
                        <label>User Name</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='name' required ></input>
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='email' required  ></input>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type='password' id='password' required ></input>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input type='number' id='phone' required ></input>
                        <span></span>
                        <label>Phone</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='address' required ></input>
                        <span></span>
                        <label>Address</label>
                    </div>
                    <button type='submit' id='submit'>SUBMIT</button><br></br>
                    <button type="reset" id='reset' >CANCEL</button><br></br>
                    <div class="login_link">
                        Have an Account ? <a href="/login">Login Here</a>
                    </div>
                    
                   
                </form>
                </div>
        </div>
         
        
    )
}

export default RegisterAction