const express = require("express");
const app = express();
const dotenv = require("dotenv")


const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors")

const userRoute =require("./routes/users")
const noteRoute =require("./routes/notes")
 
dotenv.config(); 

// mongoose connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true},()=>{
    console.log("connect to db");
}); 

// middle were
app.use(express.json());
app.use(morgan("common"))
app.use(cors())

// user route
app.use("/api/users" ,userRoute)   
// note routes
app.use("/api/notes" ,noteRoute)



app.listen(5000,() => {
    console.log("backend running");
})