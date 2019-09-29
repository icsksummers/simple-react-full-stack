import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import SearchInput from './SearchInput';

/*
1. Create an inputbox
Input box should be dynamic and take in a search term
On sumbit a search should be made on the server

2. Display the responses from the search

*/

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      username: null,
      text: '',
      res: null,
      searchTerm: 'apples'
     };
    }

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
        <SearchInput searchTerm={this.state.searchTerm}/>
        
        {username ? <h1>{`${text} ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
