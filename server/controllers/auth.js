import { hashPassword, comparePassword } from "../utils/auth"
import User from '../model/user'
import jwt from 'jsonwebtoken'
export const register = async (req,res)=> {
    try{
        const {name, email, password} = req.body;
        // validation 
        if(!name){
            return res.status(400).send('Name is required')
        }
        if(!password || password.length<6){
            return res.status(400).send('Password should be atleast 6 characters')
        }

        let userExists = await User.findOne({email:email}).exec();
        if(userExists){
            return res.status(400).send('Email already registered')
        }
        const hashedPassword = await hashPassword(password)
        const user = new User({
            name:name,
            email:email,
            password:hashedPassword
        });
        await user.save();
        return res.json({ok:true})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Error.. Try again')
    }
}


export const login = async(req,res) =>{
    try{
        const {email, password} = req.body;
        console.log(email)
        if(!email){
            return res.status(400).send('Email is required')
        }
        if(!password || password.length<6){
            return res.status(400).send('Password should be atleast 6 characters')
        }
        let user = await User.findOne({email:email}).exec();
        console.log(user,'User')
        if(!user){
            return res.status(400).send('Email is not registered')
        }
        // compare password
       const match = await comparePassword(password, user.password)
       // create signed jwt
       const token = jwt.sign(
        {_id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'4d'})

        // return user and token to the client except the password
        user.password = undefined;
        // sending the cookie in the httpOnly flag so that it will not be accessible in the client
        res.cookie('token', token, {httpOnly:true} )
        // send user as json response 
        res.json(user)

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Error.. Try Again')
    }
}

export const logout = async (req,res) =>{
    try{
        res.clearCookie('token')
        return res.send({message:'Sign out successful'})
    }
    catch(err){
        console.log(err)
    }
   
}