import axios from "axios";

export default {
  // define your front end API calls here, like so:
  saveEvent: function(data){
    console.log(data)
      axios.post("http://localhost:3001/save", {someDATA: data}).then(function(data){
        console.log('we got this back', data);
      });
      /*axios.get('http://localhost:3001/save').then(function(data){
      console.log('we got this back!!', data);
      })*/
    //ASK ROUTES FROM DATA TEAM
  },
  grabEvents: function(cb){
    axios.get("http://localhost:3001/grabEvents").then(function(data){
        console.log('we got this back', data);
        return cb(data)
      });
  }
  // getArticles: function(params) {
  //   return axios.get("/api/nyt", {someDATA: data});
  // }
  //they can then be imported and used inside of your react components/pages
};
