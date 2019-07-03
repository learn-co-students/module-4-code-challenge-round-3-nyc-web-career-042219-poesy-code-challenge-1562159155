import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  renderPoems = () => this.props.poems.map(p => <Poem key={p.id} {...p} /> )
  render(){
    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    ); 
  }
}

export default PoemsContainer;