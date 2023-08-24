import React from 'react'
import { useDispatch } from 'react-redux'
import '../../styles/Log.css'
import { cancellogin, login } from '../../../redux/actions/LogActions'

function LogPageAction(props) {
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className='center'>
                <h1>Login</h1>
                <form onSubmit={(e) => dispatch(login(e))} onReset={(e) => dispatch(cancellogin(e))}>
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
                        <input type='password' id='password' required ></input>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <button type='submit' id='submit'>LOGIN</button><br></br>
                    <button type="reset" id='reset' >CANCEL</button><br></br>
                    <div class="forgot_password_link">
                        Forgot Password? <a href="/forgotpassword">Click Here</a>
                    </div>
                    <div class="register_link">
                        Don't have an account? <a href="/register">Register Here</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogPageAction