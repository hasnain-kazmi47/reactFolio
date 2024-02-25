import express from "express";
const router = express.Router();
import {aboutMe} from "../database/models/about-me"


router.get("/aboutme", async (req,res)=>{
    try {
        const data = await aboutMe.find({});
        res.status(200).json(data[0])
    } catch (error) {
        console.log("Error occurred in get AboutMe")
    }
} )

router.post("/aboutme",async (req,res) => {
    try {
        const data = await aboutMe.create(req.body)
         res.status(200).json(data)
    } catch (error) {
        console.log("Error in adding aboutMe")
    }
})

export {router}