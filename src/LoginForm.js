import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={() => this.props.handleLogin(this.state.username)} >
          <input placeholder="Enter a username..." value={this.state.username} onChange={(e) => this.handleInput(e)}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;