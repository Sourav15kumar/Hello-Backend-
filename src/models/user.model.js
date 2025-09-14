import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
 const userschema=mongoose.Schema({
    username:{
     type:String,
     required:true,
     unique:true,
     lowercase:true,
     trim:true,
     index:true
    },
    email:{
          type:String,
     required:true,
     unique:true,
     lowercase:true,
     trim:true
     
    },
    fullname:{
          type:String,
     required:true,
     lowercase:true,
     trim:true,
     index:true
    },
    avatar:{
    type:String,                         // cloudnary URL uses here
     required:true
    
    },
    coverimage:{
        type:String                        // cloudnary URL uses here
    },
    watchHistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshToken:{
        type:String
    }
 },{timestamps:true}
)

userschema.pre("save",async function (next){          // (pre) save hone se pehle code run hota hai. yha humne password save kiya encrpt karke 
    if(!this.isModified("password")) return next() 
        this.password= await bcrypt.hash(this.password,10)
    next()
})

userschema.methods.isPasswordcorrect= async function(password){     // yha hum password check kar rhe hai 
    return await bcrypt.compare(password,this.password)
}

username.methods.isGenerateAcesstoken=function(){
      return   jwt.sign({
        _id:this._id,
        email:this.email,
       username:this.username,
       fullname:this.fullname
        } ),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIN:process.env.ACCESS_TOKEN_EXPIRY
    }
}

username.methods.isGEnerateRefreshtoken=function(){
     return   jwt.sign({
        _id:this._id,
       
        } ),
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIN:process.env.REFRESH_TOKEN_EXPIRY
    }

}
 export const User=mongoose.model("User",userschema)