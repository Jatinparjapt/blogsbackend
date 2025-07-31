// utils/generateUniqueSlug.js
const slugify = require('slugify');
const Blog = require('../models/blog/blog.model.js'); // Adjust the path as needed
const stopwords = require('stopwords').english;



module.exports.generateUniqueSlug = async (title) => {
  let baseSlug = slugify(title, {
    lower: true,
    strict: true
  });

  let slug = baseSlug;
  let count = 1;

  while (await Blog.exists({ blogSlug: slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
};


module.exports.generateMetaKeywords = (title, content, maxKeywords = 40) => {
  const text = `${title} ${content}`.toLowerCase();

  const words = text
    .replace(/[^\w\s]/g, '')         // remove punctuation
    .split(/\s+/)                    // split by whitespace
    .filter(word => word.length > 2 && !stopwords.includes(word)); // filter out stopwords and short words

  const frequency = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  // Sort by frequency and return top keywords
  const sortedKeywords = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map(([word]) => word)
    .slice(0, maxKeywords);

  return sortedKeywords.join(', ');
}


module.exports.generateShortDescription = (fullText, maxLength = 400)=>{
  if (!fullText || typeof fullText !== 'string') return '';

  const plainText = fullText
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ')    // Normalize whitespace
    .trim();

  if (plainText.length <= maxLength) return plainText;
  const trimmed = plainText.slice(0, maxLength);
  // Ensure not to cut in the middle of a word
  const lastSpace = trimmed.lastIndexOf(' ');
  return trimmed.slice(0, lastSpace) + '...';
}

