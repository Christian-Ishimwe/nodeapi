const User= require("../models/userModels")

const createUser= async (req, res) =>{
    const email= req.body.email
    const findUser=  await User.find({email: email})
    if(!findUser){
        const newUser= User.create(req.body)
        
    // const password=  req.body.password
    // const firstname= req.body.firstname
    // const lastname=  req.body.lastname
    // const mobile=  req.body.mobile
    res.json({
        msg: "Created succesful",
        success: false
    })    
}
else{
    res.json({
        msg: "User already Exists",
        success: false
    })
}
}

module.exports={createUser}