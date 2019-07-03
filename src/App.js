import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    userInput: "",
    user: false,
    poemNameInput: "",
    poemText: "",
    colorText: false
  }

  changeColor = id => {
    const updatedPoems = this.state.poems.map(poem => {
      if (poem.id === id) {
        return {
          ...poem,
          read: !poem.read
        }
      } else {
        return poem
      }
    })
    this.setState({
      poems: updatedPoems
    })
  }

  addPoem = (e, name, text) => {
    e.preventDefault()
    console.log(name, text)
    this.setState({
      poems: [...this.state.poems, { title: name, content: text, author: this.state.userInput }]
    })

  }

  renderNewPoem = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // renderUserInput = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     userInput: e.target.value
  //   })
  // }

  loginBtn = (username) => {
    this.setState({
      user: true,
      userInput: username
    })
  }

  logoutBtn = () => {
    this.setState({
      user: false,
      userInput: ""
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/poems")
      .then(res => res.json())
      .then(poems => {
        const updatedPoems = poems.map(poem => {
          return {
            ...poem,
            read: false
          }
        })
        this.setState({ poems: updatedPoems })
      })
  }

  inOrOut = () => {
    if (!this.state.user) {
      return <LoginForm userInput={this.state.userInput} renderUserInput={this.renderUserInput} loginBtn={this.loginBtn} />
    } else if (this.state.user) {
      return (
        <div>
          <UserHeader logoutBtn={this.logoutBtn} userInput={this.state.userInput} />
          <NewPoemForm addPoem={this.addPoem} renderNewPoem={this.renderNewPoem} poemNameInput={this.state.poemNameInput} poemText={this.state.poemText} />
        </div>
      )
    } else {
      return <LoginForm userInput={this.state.userInput} renderUserInput={this.renderUserInput} loginBtn={this.loginBtn} />
    }
  }

  render() {
    console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          {this.inOrOut()/*!this.state.user?
            <LoginForm userInput={this.state.userInput} renderUserInput={this.renderUserInput} loginBtn={this.loginBtn}/>
            :

            <UserHeader logoutBtn={this.logoutBtn} userInput={this.state.userInput}/>

        */}

        </div>
        <PoemsContainer colorText={this.state.colorText} changeColor={this.changeColor} poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
