const express= require("express");
const User = require("./mongo");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.post("/app", async(req, res)=>{

    // console.log(req.body);
    // const {msg} = req.body
    const {msg} = req.body 
    const data  = {
        msg:msg
    }

    console.log({msg})
    console.log(data.msg)

    await User.insertMany([data])

})

app.listen(8000, () => {
    console.log("Running on port 8000");
  })