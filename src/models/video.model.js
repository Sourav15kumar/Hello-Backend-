import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoschema=new mongoose.Schema({
    videofile:{
        type:String,                  // cloudnary URL
        required:true
    },
    thumbnail:{
          type:String,                  // cloudnary URL
        required:true
    },
    title:{
          type:String,                  
        required:true
    },
    description:{
          type:String,                  
        required:true
    },
    duration:{
         type:Number,                 // cloudnary url                  
        required:true
    
    },
    views:{
         type:Number,                                
        default:0
    },
    ispublished:{
        type:Boolean,
        default:true

    },
    ownner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true})

videoschema.plugin(mongooseAggregatePaginate)

export const Video= mongoose.model("Video",videoschema)