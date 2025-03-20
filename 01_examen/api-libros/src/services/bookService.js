// src/services/bookService.js
class BookService {
    constructor(bookModel) {
      this.bookModel = bookModel;
    }
  
    async getAllBooks() {
      return await this.bookModel.find({});
    }
  
    async getBookById(id) {
      return await this.bookModel.findById(id);
    }
  
    async createBook(bookData) {
      const book = new this.bookModel(bookData);
      return await book.save();
    }
  
    async updateBook(id, bookData) {
      return await this.bookModel.findByIdAndUpdate(
        id, 
        { ...bookData, updatedAt: Date.now() },
        { new: true, runValidators: true }
      );
    }
  
    async deleteBook(id) {
      return await this.bookModel.findByIdAndDelete(id);
    }
  }
  
  module.exports = BookService;