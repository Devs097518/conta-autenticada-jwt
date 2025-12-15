import mongoose from "mongoose" ;

const UserInfoSchema = new mongoose.Schema({
    email:String,
    senha: String,
    role: String,
});

export default mongoose.model('UserInfo' , UserInfoSchema);
