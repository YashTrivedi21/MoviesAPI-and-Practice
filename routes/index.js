let express = require('express');
let app = express()
let router = express.Router();
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
})

router.get('/movie',((req, res) => {
  // let movie = req.param('movie')
  console.log(req.query.movieName)
  let movie = req.query.movieName;
  const request = require('request');
  let link = 'http://www.omdbapi.com/?apikey=e9a391dc&s=' + movie
  request(link, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let data = JSON.parse(body)
    console.log('data:', data['Search']); // Print the HTML for the Google homepage.
    let sent = data['Search']
    res.render('movies',{movies : sent})
  });

}))

// Movie part ends here and Dog part starts here.

 router.post('/addDog',((req, res) => {
}))

router.get('/posts',function (req,res){
  let posts = [
    {title:"Dogs", author: "Rock"},
    {title:"Cats", author: "Tom"},
    {title:"Mice", author: "Jerry"}
  ]
  res.render('posts',{posts:posts})
})

router.get('/doggo/:name',function(req, res) {
  let dogName = req.params.name
  res.render('dogs',{dog: dogName})
})

router.get('/:var', function (req,res) {
  console.log(req.params.valueOf())
  let x = req.param('var')
  if (x==='bye') res.send("hello boi!");
  if (x==='doggo') res.send("The Holy Dog!!!!!");
  else res.send(`<p>you might want to go to <a href="https://www.google.com">here</a></p>`)
  //console.log("yay!!!")
})

module.exports = router;