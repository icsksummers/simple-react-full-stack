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
      username: '',
      text: '',
      res: {},
      searchTerm: ''
     };

     this.onSearch = this.onSearch.bind(this);
     this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
    }

  componentDidMount() {
    fetch(`/api/getUsername?searchTerm=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => this.setState({ 
        username: data.username,
      text: data.text,
      res: data.data
     }));
  }
  
  onChangeSearchTerm(e){
    this.setState({searchTerm: e.target.value});
    console.log(this.state.searchTerm);
  }

  onSearch(e){
  // prevent Default from form submit refresh
    e.preventDefault();
    console.log('==on search called== with searchTerm',this.state.searchTerm);
    fetch(`/api/getUsername?searchTerm=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => this.setState({ 
        res: data.data
     }));
  }
  render() {
    const { username, text, res } = this.state;

    let renderedMovies;


    if (this.state.res.results) {
      renderedMovies = this.state.res.results.map((movie,i) =>{
        return (
          <li key={i}>{movie.title}</li>
        )
      })
    }

    console.log('===rendered Movies==' ,renderedMovies);
    return (
      <div>
        <h1>
          Search Movies
        </h1>
        <SearchInput searchTerm={this.state.searchTerm} onChange={this.onChangeSearchTerm} onSearch={this.onSearch}/>

        {/*
        This is a terinary operator to check that the client and server connected with data on the user
      
        
        {username ? <h1>{`${text} ${username}`}</h1> : <h1>Loading.. please wait!</h1>}

      
          {/* This is a terinary operator to render movies if it exists */}

        <ul>
          {(renderedMovies) ? renderedMovies:''}
        </ul>
          </div>
    );
  }
}
