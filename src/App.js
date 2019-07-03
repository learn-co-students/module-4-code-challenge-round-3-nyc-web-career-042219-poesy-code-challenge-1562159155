import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state = {
    poems: [],
    currUser: ""
  }
  componentDidMount() {
    fetch('http://localhost:3000/poems')
    .then(r => r.json())
    .then(allPoems => {
      this.setState({
        poems: allPoems
      })
    })
  }

  handleLogin = (username) => {
    this.setState({
      currUser: username
    })
  }

  submitPoem = (e) => {
    if (this.state.currUser !== "") {
      let newPoem = {title: e.target[0].value, content: e.target[1].value, author: this.state.currUser}

      fetch('http://localhost:3000/poems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Type': 'application/json'
        },
        body: JSON.stringify(newPoem)
      })
      .then(r => r.json())
      .then(newerPoem => {
        let updatedPoems = [...this.state.poems, newerPoem]

        this.setState({
          poems: updatedPoems
        })
      })
    } else {
      window.alert('You must log in first!')
    }
    
    // let updatedPoems = [...this.state.poems, poem]
    //   this.setState({
    //     poems: updatedPoems
    //   })
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.currUser !== "" ? <UserHeader currUser={this.state.currUser} handleLogin={this.handleLogin} /> : <LoginForm handleLogin={this.handleLogin} />}
          <NewPoemForm submitPoem={this.submitPoem}/>
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
