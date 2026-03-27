import mongoose from "mongoose";

const { Schema } = mongoose;

const problemSchema = new Schema(
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
      type: String
    }
  ],

  constraints: {
    type: String
  },

  examples: [
    {
      input: String,
      output: String,
      explanation: String
    }
  ],

  starterCode: {
    type: String
  },

  solution: {
    type: String
  },

  testcases: [
    {
      type: Schema.Types.ObjectId,
      ref: "Testcase"
    }
  ],

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

},
{ timestamps: true }
);

export default mongoose.model("Problem", problemSchema);            