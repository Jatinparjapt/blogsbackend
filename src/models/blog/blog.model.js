// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  shortDesc: {
    type: String,
    required: true
  },
  fullDesc: {
    type: String,
    required: true
  },
  authorType: {
    type: String,
    enum: ['secondrootuser', 'superuser'],
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'authorType' // Polymorphic reference
  },

  // ✅ SEO and metadata fields
  blogImage: {
    type: String, // URL or file path
    required: false
  },
  blogSlug: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  meta_title: {
    type: String,
    required: true
  },
  meta_description: {
    type: String,
    required: true
  },
  meta_keywords: {
    type: [String], // array of keywords
    default: []
  },
  og_title: {
    type: String,
    required: false
  },
  og_description: {
    type: String,
    required: false
  },
  og_keywords: {
    type: [String],
    default: []
  },

  // ✅ Status & approval
  isApproved: {
    type: Boolean,
    default: false
  },
  status: {
    type: Boolean,
    default: false // true = published, false = draft
  },
  publishedAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Blog', blogSchema);
