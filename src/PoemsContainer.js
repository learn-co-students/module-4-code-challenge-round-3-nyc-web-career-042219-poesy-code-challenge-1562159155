import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  render(){
    // console.log(this.props.poems) have poems in array
    const poemsList = this.props.poems.map(poem => {
      return <Poem key={poem.id} poem={poem}/>
    })
    return (
      <div className="poems-container">
        {poemsList
         /* render poems here*/
        }
      </div>
    );
  }
}

export default PoemsContainer;
