// models/SecondRootUser.js
const mongoose = require('mongoose');

const secondRootUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isApprovedBySuperUser: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'secondrootuser',
    enum: ['secondrootuser']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SecondRootUser', secondRootUserSchema);
