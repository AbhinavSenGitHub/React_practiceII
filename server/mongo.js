const mongoose = require("mongoose");
// mongoose connection
mongoose.connect("mongodb://0.0.0.0:27017/reactPractice")
  .then(() => {
    console.log("conneted to mongoose")
  }).catch((error) => {
    console.log("error in conneting to mongoose:- " + error);
  })
const userSchema = new mongoose.Schema({
  msg: {
    type: String,
    require: true
  }
  // password:{
  //   type:String,
  //   require:true
  // }
})
const User = mongoose.model("timepass", userSchema);

module.exports = User;



















// const mongoose = require("mongoose");
// // mongoose connection
// mongoose.connect("mongodb://0.0.0.0:27017/reactPractice")
// .then(() => {
//     console.log("conneted to mongoose")
//   }).catch((error) => {
//     console.log("error in conneting to mongoose:- " + error);
//   })
//   const newSchema=new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const collection = mongoose.model("collection",newSchema)

// module.exports=collection