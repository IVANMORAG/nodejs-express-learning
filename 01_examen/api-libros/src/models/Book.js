const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  publishedYear: {
    type: Number
  },
  isbn: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Actualizar la fecha cuando se modifica el documento
bookSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
  });
  
  const Book = mongoose.model('Book', bookSchema);
  
  module.exports = Book;