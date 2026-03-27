import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"first name is required"],
        min:6,
        max:15

    },
    lastName:{
          type:String,
        required:[true,"last name is required"],
        min:3,
        max:15
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email must be unique"]
    },
    age:{
        type:Number,
        min:10,
        max:80

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
  problemSolved: {
  type: [{
    type: Schema.Types.ObjectId,
    ref: "Problem"
  }],
  default: []
},
    password:{
        type:String,
        required:[true,"password is required"],
        unique:[true,"password must be unique"],
        min:8,
        max:15

    }
},{timestamps:true})


const User = mongoose.model("user",userSchema);
export default User