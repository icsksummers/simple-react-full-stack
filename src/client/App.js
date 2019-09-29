import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { 
    username: null,
    text: '',
    res: null,
     };

  componentDidMount() {
    fetch('/api/getUsername?searchTerm={apples}')
      .then(res => res.json())
      .then(data => this.setState({ 
        username: data.username,
      text: data.text,
      res: data.data
     }));
  }

  render() {
    const { username, text, res } = this.state;

    console.log(res);
    return (
      <div>
        {username ? <h1>{`${text} ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
