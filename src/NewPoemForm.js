import React from 'react';

class NewPoemForm extends React.Component {
  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={(e)=>this.props.addPoem(e,this.props.poemNameInput, this.props.poemText)}>
          <input onChange={(e)=>this.props.renderNewPoem(e)} value={this.props.poemNameInput} name="poemNameInput" placeholder="Name your masterpiece..." />
          <textarea onChange={(e)=>this.props.renderNewPoem(e)} value={this.props.poemText}  name="poemText" placeholder="Your masterpiece belongs here..." />
          <input  type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
