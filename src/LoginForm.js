import React from 'react';

class LoginForm extends React.Component {
  render(){
    return (
      <div className="login">
        <form className="login-form">
          <input  onChange={(e)=>this.props.renderUserInput(e)} value={this.props.userInput} placeholder="Enter a username..." />
          <input onClick={this.props.loginBtn} type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
