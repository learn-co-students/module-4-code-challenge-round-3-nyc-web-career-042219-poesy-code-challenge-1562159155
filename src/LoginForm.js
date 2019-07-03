import React from 'react';

class LoginForm extends React.Component {
  state = {
    userInput: ""

  }

  renderUserInput = (e) => {
    console.log(e.target.value)
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginBtn(this.state.userInput)
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input onChange={this.renderUserInput} value={this.state.userInput} placeholder="Enter a username..." />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
