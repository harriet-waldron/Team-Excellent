import request from 'superagent'
// import unirest from 'unirest'

const serverURL = 'http://localhost:3000/api/v1'
const API_URL = "https://sameer-kumar-aztro-v1.p.rapidapi.com/"

function externalApi () {
  return request.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=pisces&day=today")
    .set("X-RapidAPI-Key", "3b395eee1fmshf0cab510630df35p129287jsned3627aede7c")
    .then(result => {
      console.log(result.body)
    })
    .catch(err => {
      console.log(err.message)
    })
}


  

  // .end(function (result) {
  //   console.log(result.status, result.headers, result.body);
  // });

  // var req = unirest("POST", "https://sameer-kumar-aztro-v1.p.rapidapi.com/");

// req.query({
// 	"sign": "aquarius",
// 	"day": "today"
// });

// req.headers({
// 	"x-rapidapi-key": "3b395eee1fmshf0cab510630df35p129287jsned3627aede7c",
// 	"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });