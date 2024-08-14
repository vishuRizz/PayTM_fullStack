const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vishurizz01:RzfgxKDYAOSSooKq@cluster0.7ozbuch.mongodb.net/payTM_db"
);

const userTable = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowerCase: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  firstname:{ 
    type: String,
    required: true,
    maxLength: 30,
    trim: true,
},
  lastname:{ 
    type: String,
    required: true,
    maxLength: 30,
    trim: true,
},
  Email: String,
  Password:{
    type: String,
    minLength: 6,
    required: true,
},
});
const User = mongoose.model("userTable", userTable);
module.exports = { User };
