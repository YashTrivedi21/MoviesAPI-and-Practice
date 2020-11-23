const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,useUnifiedTopology:true})

let scat = new mongoose.Schema({
    name : String,
    age: Number,
    temperament: String
})

let Cat = new mongoose.model("Cat",scat)
//
// let newCat = new Cat({
//     name: "garfield",
//     age: 40,
//     temperament: "funny"
// })
// newCat.save((err,cat) => {
//     if(err){
//         console.log("error happened",err)
//     } else {
//         console.log("no errors. :)",cat)
//     }
// })

// Cat.create({
//     name : "android",
//     age : 15,
//     temperament: "happy"
// }, (err,cat) => {
//     if (err) console.log(err)
//     else console.log("android is a CAT!!!",cat)
// })

Cat.find({}, (err,cats) =>{
    if (err) console.log(err)
    else console.log("Cats Array  :-)",cats)
})

Cat.remove({name:"android"}, (err,res) => {
    if (err) console.log("err")
    else console.log(res)
})