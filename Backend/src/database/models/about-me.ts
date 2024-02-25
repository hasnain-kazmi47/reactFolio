import mongoose from "mongoose";

const aboutMeSchema = new mongoose.Schema({
    name:String,
    profle:String,
    email:String,
    phone:String,
    skills:String,
    summary:String
})

const aboutMe = mongoose.model('AboutMe',aboutMeSchema)

export {aboutMe}