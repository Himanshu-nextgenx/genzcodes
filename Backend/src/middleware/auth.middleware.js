import jwt from "jsonwebtoken"

const authMiddleware = (req,res ,next)=>{

   try {
     const token = req.cookies.token;
     if(!token){
        console.log("token not exist")
     }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    req.user = decoded;
    next();
   } catch (error) {
     return res.status(404).json({
          message:'token is invaild ',
           error
      
     })
   }
}
export default authMiddleware