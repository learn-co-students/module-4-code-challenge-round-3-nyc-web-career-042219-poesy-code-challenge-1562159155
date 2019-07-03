import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    poemNameInput: "",
    poemText: ""
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPoem(this.state)
  }

  render() {
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.poemNameInput} name="poemNameInput" placeholder="Name your masterpiece..." />
          <textarea onChange={this.handleChange} value={this.state.poemText} name="poemText" placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
