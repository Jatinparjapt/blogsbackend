// db.js
require('dotenv').config()
const mongoose = require('mongoose');
const MONGOOSE_URI = process.env.MONGOOSE_URI
console.log(MONGOOSE_URI, "url ")
const connectDB = async () => {
  try {
    // Replace the URI string as needed for your environment
    const uri = MONGOOSE_URI;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database is connected');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
