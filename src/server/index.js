require('dotenv').config();
const express = require('express');
const os = require('os');
const fetch = require('node-fetch');

const app = express();

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

console.log(API_URL);



app.use(express.static('dist'));
app.get('/api/getUsername', function (req,res, next){

    // console.log('this is request', req);

    // rwq is the rwquest from localhost:3000

    //set searchTerm = the query obj of the request
    const searchTerm = req.query.searchTerm;

    //make sure that we can grab searchTerm form query string
    
    /* the string in the fetch from App.js is the query string 
        fetch('/api/getUsername?searchTerm=${this.state.searchTerm}')

        the endpoint ' /api/getUsername' matches the one in this function:
        'app.get('/api/getUsername', function (req,res, next)'
        */

        console.log('===this is searchTerm', searchTerm);
        let myResponse = {
            username: os.userInfo().username,
            text: 'Bye'
        }

        fetch(`${API_URL}?api_key=${API_KEY}&query=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                myResponse.data = data;
                
                res.send(myResponse)
            });
            
    


    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(data => this.setState({ 
    //     username: data.username,
    //   text: data.text,
    //   res: data.res
    //  }));


    //  function requestMovies(url, onComplete, onError) {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then(onComplete)
    //         .catch(onError);
    // }


});


// app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
 app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
