import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import redis from "../config/redis.js";

export const register = async (req, res) => {
    
  try {
    const { firstName, lastName ,email, password } = req.body;

    const isAlreadyRegistered = await User.findOne({ email });

    if (isAlreadyRegistered) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 11);
   

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role:"user"
    });

    const token = jwt.sign(
      {
        id: user._id,
        email,
        role:user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.cookie("token", token);

    return res.status(201).json({
      message: "User registered successfully",
    });

  } catch (err) {
    console.log("error",err)
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const login = async (req,res)=>{

   try{
     const {email,password} = req.body
     

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:" user not registered register first "
            
        })
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password)

    if(!isPasswordMatch){
        return res.status(400).json({
            message:"invaild credientials"
            
        })
    }
     
    const token = jwt.sign({
        id:user._id,
        email,
        role:user.role
    },process.env.JWT_SECRET,{expiresIn:"2d"})

    res.cookie("token",token)
    return res.status(200).json({
  message:"login successful",
  token
})
    
   }
    catch(err){
        console.log("error",err)
     return res.status(500).json({
        message:"internal server error"
     })
    }


}

export const logout = async (req,res)=>{
   const token = req.cookies.token;
   const user =req.user.id 
    await redis.set(token, Date.now().toString(), "EX", 60*60)

    res.clearCookie("token");
console.log("userId", user )
console.log("token", token)
    res.status(200).json({      
        message:"logout successfully "
    })


}
export const adminTestController = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Admin route working successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};