const mongoose = require("mongoose");

require('dotenv').config();



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true }
    );

global.User =mongoose.model("User",{
    firstName: String,
    lastName: String,
    email: String,
});