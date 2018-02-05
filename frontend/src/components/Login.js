import React, { Component } from 'react';
import request from 'request';

// Needed to get Store!
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleError = this.handleError.bind(this);
    const { dispatch} = props;
    this.boundActionCreators = bindActionCreators(Actions, dispatch)
   
  }
  handleError(status) {
    console.log('error:'+ status)
  }
  handleLogin(event) {
    event.preventDefault();
    let { history, dispatch } = this.props

    const formUsername = event.target.elements.username.value;
    const formPassword = event.target.elements.password.value;
    const creds = { username: formUsername, password: formPassword }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    };
    fetch('http://127.0.0.1:8080/api/login/', options).then(res => res.json())
      .catch(error => false)
      .then(response => {
        if(!!response.token){
          let action = Actions.addToken(response.token);
          dispatch(action);
          history.push('/feed');
        }
      });
  }
  render() {
    return (
      <div className="container">
        <form  className="uk-form-horizontal uk-margin-meduim" onSubmit={this.handleLogin}>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Login</legend>
            <div className="uk-margin">
              <label htmlFor="username" className="uk-form-label">username</label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-width-medium" type="text" name="username" />
              </div>
            </div>
            <div className="uk-margin">
              <label htmlFor="password" className="uk-form-label">password</label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-width-medium" type="password" name="password" />
              </div>
            </div>
            <input 
              type="submit" 
              className="uk-button uk-button-primary uk-form-controls" 
              value="Login"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(Login);