import { request } from "express";
import { asyncHandler } from "../utils/asyncHnadler.js";

const registeruser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"sourav backend kaam kar rha hai"
    })
})

export {registeruser}