 

     const express = require('express'),
       bodyParser = require('body-parser'),
       var users = require('../models/users');

      mongoose = require('mongoose'),
      config = require('./config'),
      //connection
      mongoose.Promise = global.Promise;
     mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
 

app.post('/postmydata',(req,res)=>{

    var data= req.body;
    console.log(data)
    var user = new User(data);
    
    user.save()
     .then(item => {
     res.status(200).json({'user added successfully'});
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });

})
 
  app.listen(3000, ()=>{
  console.log('Listening on port ' + port);
});