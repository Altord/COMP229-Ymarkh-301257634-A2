import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//I have the parameters first and then the options second {},{options}
const UserSchema = new Schema({
    username: String,
    password: String,
    emailadd: String,
},{timestamps: true, collection:'users'});

export default mongoose.model('Users',UserSchema);