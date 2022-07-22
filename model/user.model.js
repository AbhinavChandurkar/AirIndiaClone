/**
 *  This file will contain informatin about the user model
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /**
     *  name,email,password,age,gender,destinatin,depature 
     * 
     */
    name : {
        type : String,
        required : true
    }
})
