import React from 'react';

class UserHeader extends React.Component {
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.userInput}!</h3>
        <button onClick={this.props.logoutBtn}>Logout</button>
      </div>
    );
  }
}

export default UserHeader;
