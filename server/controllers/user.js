import User from "../models/User.js";

const PostSignup = async (req,res) => {
    const { fullName, email, password, dob } = req.body

    const user = new User({
        fullName,
        email,
        password, 
        dob : new Date(dob),
      
    })

    try{
        const savedUser = await user.save();

        res.json({
            success : true,
            data : savedUser,
            message : 'Registered successfully !'
        })
    }
    catch(e){
        res.json({
            success : false,
            data : null,
            message : e.message,
        })
    }

}

const postLogin = async (req,res) => {
    const {email, password} = req.body

    const user = await User.findOne({
        email : email,
        password :  password
    })

    if(user){
        res.json({
            success : true,
            data : user,
            message : 'Login successfully..!'
        })
    }
    else{
        res.json({
            success : false,
            data : null,
            message : 'Invalid credentials'
        })
    }
}
export {PostSignup , postLogin};