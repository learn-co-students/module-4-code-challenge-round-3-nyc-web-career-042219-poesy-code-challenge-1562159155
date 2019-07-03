import React from 'react';

class Poem extends React.Component {
  state = {
    read: false
  }

  handleRead = () => this.setState({read: !this.state.read})

  render(){
    return (
      <div style={{color: this.state.read ? 'red' : 'black'}} onClick={() => this.handleRead()}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>-{this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
