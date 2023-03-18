const express = require('express');
const app = express();
const port = 8000;

app.get('/', function(req, res){
    //by using req.json we can check the API response in the console or text editor(Need to install RESTClient extension in VS code)
    res.json({message: "Express is up and running"});
    // res.send('<h1>Express is up and running<h1>');
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});

