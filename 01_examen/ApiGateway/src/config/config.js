const config = {
  services: {
    books: {
      url: process.env.BOOK_SERVICE_URL || 'http://localhost:4000',
      prefix: '/books'
    },
    users: {
      url: process.env.USER_LOAN_SERVICE_URL || 'http://localhost:4001',
      prefix: '/api/users'
    },
    loans: {
      url: process.env.USER_LOAN_SERVICE_URL || 'http://localhost:4001',
      prefix: '/api/loans'
    }
  }
};

module.exports = config;