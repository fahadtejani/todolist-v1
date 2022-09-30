const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
console.log(date.getDate());

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const items = ['Item 1', 'Item 2', 'Item 3'];
const workItems = [] ;
app.get('/', (req, res) => {
const day= date.getDate();
  res.render('list', {
    kindOfDay: day,
    newItem: items
  });
});

app.post('/', (request, response) => {
  if(request.body.list === 'Work'){
    workItems.push(request.body.listItem);
    response.redirect('/work');
  } else{
  // console.log(request);
  console.log(request.body);
  items.push(request.body.listItem);
  response.redirect('/');
    }
});

app.get('/work',(req,res)=>{
  res.render('list',{kindOfDay:'Work List', newItem:workItems});
});

app.post('/work',(req,res)=>{
  Workitems.push(req.body.listItem);
  response.redirect('/work');
});

app.get('/about',(req,res)=>{
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
