const { default: mongoose } = require("mongoose")

const  dbConnect = () =>{
    try{
        const conn= mongoose.connect(process.env.MONGODB_URL)
        console.log("connected succesful")
    }
    catch(err){
        console.log(err)
    }
   
}
module.exports=dbConnect