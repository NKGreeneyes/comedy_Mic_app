const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

const EventModel = require('./models/events.js')
/*app.post('/save', function(req, res){
  console.log('we hit the /save route!!!', req.body)
  testModel.create(req.body).then(function(data){
    res.json(data)
  })
  // res.send('ok');
});*/

app.get('/grabEvents',function(req, res) {

  EventModel.find({}).then(function(data){
    res.json(data)
  })

})

app.post('/save',function(req, res) {
  console.log('we hit the route!!!', req.body)
  EventModel.create(req.body.someDATA).then(function(data){
    console.log('we saved -', data)
    res.json(data)
  })
  //res.send('helllo from route')
})
// Connect to the Mongo DB
//change to match your db name!
mongoose.connect("mongodb://localhost/project3");

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
