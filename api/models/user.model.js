import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true,// this means that the username must be there for 
        unique:true,// this means that the name must different no name should much
    },
    useremail:{
        type: String,
        require: true,
        unique: true,
    },
    passwors:{
        type: String,
        require: true,
    }
}, {timestamps: true})// timestamp:true means that each user is going to be having two extra information the time of creation and the time of edit: mong0 will add them automatically and can be used on the adim panel if want to sort in terms of time

const User = mongoose.model('User', userSchema);// this is creating the model

export default User;// it is exported as default so that it can be used in other part of the application.