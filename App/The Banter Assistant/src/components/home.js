import React from 'react'

import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()

    this.state =  {
      jokes: {}

    }

    this.handleClick = this.handleClick.bind(this)
  }

  getJokes() {

    axios.get('https://geek-jokes.sameerkumar.website/api')
      .then(res => {
        const jokes = res.data
        this.setState({ jokes: jokes })
        console.log(jokes)
      })
  }

  componentDidMount(){
    this.getJokes()
  }

  handleClick(e){
    e.preventDefault
    this.setState(this.getJokes())


  }

  render(){

    return(
      <main className="section">
        <div className="container">
          <h1 className="title">{ this.jokes }</h1>
          <button className="button" onClick={this.handleClick}>New Joke</button>
        </div>
      </main>

    )
  }
}

export default Home
