import React, {useRef,useState, useEffect} from 'react';
import axios from 'axios';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import styles from '../Login/login.css';

const Login = (props) => {
    console.log('here1')
    return (
    <div className="login">
        <div>
         <br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1 className ="heading">LOGIN </h1>
            <label className="label"> Username: </label> &nbsp;&nbsp;&nbsp;
            <input type="text" className="email" placeholder="Enter email" id="email"/>
            <br></br>
            <br></br>
            <label>Password: </label> &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" className="email"  placeholder="Enter password" id="pwd"/>
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <button className="button" onClick = {async (e)=>{
                e.preventDefault();
                var email = document.getElementById('email').value;
                var pwd = document.getElementById('pwd').value;

                const res = await axios.get('http://localhost:8081/user/verify', {
                    params: {
                        email: email,
                        password: pwd
                      }
                    });
                    
                    if(res.status==200){
                        props.setlogStatus(true);
                }
             }} type="button" id="login"> Login</button>
             
        </div>
    </div>
    )
}

export default Login;
  