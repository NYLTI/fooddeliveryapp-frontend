import React from 'react'
import { useDispatch } from 'react-redux'
import '../../styles/Log.css'
import { cancellogin, cancelreset, login, customerresetlogin } from '../../../redux/actions/LogActions'

function ForgotPassword(props) {
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className='center'>
                <h1>Forgot Password</h1>
                <form onSubmit={(e) => dispatch(customerresetlogin(e))} onReset={(e) => dispatch(cancelreset(e)) }>
                    <p>
                        Please enter your email and username to  
                    </p>
                    <div>
                        <h2><label for="vc">Vendor or Customer</label></h2>
                        <select name="vc" id="vc">
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                        </select>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='username' required ></input>
                        <span></span>
                        <label>User Name</label>
                    </div>
                    <div className="txt_field">
                        <input type='text' id='email' required ></input>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type='password' id='password' required ></input>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <button type='submit' id='submit'>SUBMIT</button><br></br>
                    <button type="reset" id='reset' >CANCEL</button><br></br>
                    <div class="register_link">
                        Don't have an account? <a href="/register">Register Here</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword