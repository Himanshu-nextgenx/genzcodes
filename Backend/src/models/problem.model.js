import mongoose from "mongoose";
const problemSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: [true,"titlle is required"],
   
  },


  description: {
    type: String,
    required: [true,"discription is required"]
  },

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true,"difficulty level is required"]
  },

  tags: [
    {
      type: String,
      enum :["array","linked list ","graph","dp"],
       required: [true,"tag is required"]
    }
  ],

  visibletestcases:[
    {
      input:{
        type:String,
        required:[true,"input is required"]
      },
      output: {
        type:String,
        required:[true,"input is required"]
      },
      explanation: {
        type:String,
        required:[true,"explaination is required"]
      }
    }
  ],
  hiddentestcases:[
    {
      input:{
        type:String,
        required:[true,"input is required"]
      },
      output: {
        type:String,
        required:[true,"input is required"]
      }
    }
  ],


  startCode: [
    {
      language:{
        type:String,
        required:true
      },
      initial:{
        type:String,
        required:true
      }
    }
  ],


  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required:true,
  }

},
{ timestamps: true }
);

const Problem = mongoose.model("problem", problemSchema);   

export default Problem