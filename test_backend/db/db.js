const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vishurizz01:RzfgxKDYAOSSooKq@cluster0.7ozbuch.mongodb.net/Test_paytm_db')

const userTable = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})
const User = mongoose.model("userTable", userTable)
module.exports = User;
