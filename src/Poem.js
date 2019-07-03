import React from 'react';

class Poem extends React.Component {
  // state = {
  //   read: false
  // }

  // markAsRead = () => this.setState({ read: true })

  render() {
    return (
      //working on color change
      <div onClick={() => this.props.changeColor(this.props.poem.id)} style={!this.props.poem.read ? { color: "black" } : { color: "red" }}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
      </div>
    );
  }
}

export default Poem;
