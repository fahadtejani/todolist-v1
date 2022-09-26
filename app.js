const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{

  // res.send("Hello World");
  var today = new Date();
  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  res.render('list',{kindOfDay:day});
  // res.send(`Today is ${week[today.getDay()]}`);

});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
