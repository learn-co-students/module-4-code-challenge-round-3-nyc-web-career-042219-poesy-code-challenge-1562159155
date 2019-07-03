import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitPoem(e)
    this.setState({
      title: '',
      content: ''
    })
  }

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={(e) => this.handleSubmit(e)}>
          <input name='title' placeholder="Name your masterpiece..." value={this.state.title} onChange={(e) => this.handleInput(e)}/>
          <textarea name='content' placeholder="Your masterpiece belongs here..." value={this.state.content} onChange={(e) => this.handleInput(e)} />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;