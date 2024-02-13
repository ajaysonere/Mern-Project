import mongoose from 'mongoose';

const post = mongoose.Schema({
   title :{type: String , required: true},
   desc : {type: String, required:true}
});

export const Post = mongoose.model("post" , post);