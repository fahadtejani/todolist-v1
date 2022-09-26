const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{

  var today = new Date();
  var currentDay = today.getDay();
  const daysInWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var day = daysInWeek[currentDay];
  res.render('list',{kindOfDay:day});

});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
