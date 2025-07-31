const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

// You should store these in `.env` for real-world use!
const secretKey = crypto.createHash('sha256').update('your-super-secret-key').digest(); // 32 bytes
const iv = Buffer.alloc(16, 0); // 16-byte zero-filled IV for simplicity (can also be random per encryption)

// Encrypt any number string
function encryptNumberString(numberString) {
  if (typeof numberString !== 'string') {
    throw new Error('Input must be a string');
  }

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(numberString, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt to original number string
function decryptNumberString(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  encryptNumberString,
  decryptNumberString
};
