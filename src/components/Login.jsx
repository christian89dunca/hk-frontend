import React, { Component } from 'react';
import "../App.css"

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="login-wrapper">
                
                <h2 className="login">Knowledge Base</h2>
                <h3 className="login">Login System</h3>
                
                
                <form>
                    <div className="form-group login-form">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group login-form">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <button id="submit-btn" type="submit" className="btn btn-danger">Sign in</button>
                </form>           
            </div>
            
        );
    }
}
 
export default Login;