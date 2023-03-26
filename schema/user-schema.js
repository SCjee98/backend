import mongoose from 'mongoose';
//import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    patientid: String,
    fname: String,
    lname: String,
    email: String,
    dob: String,
    blood_group: String,
    image: String,
    gender: String,
    religion: String,
    Language: String,
    martialstatus: String,
    Occupation: String,
    vaccinestatus: String,
    hospitalname: String,
    doctorname: String,
});


// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
// const postUser = mongoose.model('user', userSchema);

// export default postUser;
const user = new mongoose.model("user", userSchema);
export default user