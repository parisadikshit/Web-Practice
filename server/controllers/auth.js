import { hashPassword, comparePassword } from "../utils/auth"
import User from '../model/user'
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