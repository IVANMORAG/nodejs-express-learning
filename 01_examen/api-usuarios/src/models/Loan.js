const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  bookTitle: {
    type: String,
    required: true
  },
  loanDate: {
    type: Date,
    default: Date.now
  },
  returnDate: {
    type: Date,
    required: true
  },
  returned: {
    type: Boolean,
    default: false
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
loanSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;