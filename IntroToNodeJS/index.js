const express = require('express');
const app = express();
const port = 8000;
//import json-web-token module
const jwt = require('jsonwebtoken');

app.get('/', function(req, res){
    //by using req.json we can check the API response in the console or text editor(Need to install RESTClient extension in VS code)
    res.json({message: "Express is up and running"});
    // res.send('<h1>Express is up and running<h1>');
})

app.post('/tokenGenerate', (req, res) => {
    const user = {
        id: 1234,
        username: 'Aug25B2022',
        email: 'aug25B@coding.com'
    }
    jwt.sign(user, 'secret', function(err, token) {
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                token
            })
        }
      });
});

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});

