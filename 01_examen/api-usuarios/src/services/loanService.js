const axios = require('axios');

class LoanService {
  constructor(LoanModel, bookApiUrl) {
    this.Loan = LoanModel;
    this.bookApiUrl = bookApiUrl || 'http://localhost:3000/books';
  }

  async getAllLoans() {
    return await this.Loan.find().populate('userId', 'name email');
  }

  async getLoanById(id) {
    return await this.Loan.findById(id).populate('userId', 'name email');
  }

  async createLoan(loanData) {
    // Verificar disponibilidad del libro en la API de libros
    try {
      const bookResponse = await axios.get(`${this.bookApiUrl}/${loanData.bookId}`);
      const book = bookResponse.data;
      
      if (!book || !book.available) {
        throw new Error('El libro no está disponible para préstamo');
      }
      
      // Actualizar disponibilidad del libro a false
      await axios.put(`${this.bookApiUrl}/${loanData.bookId}`, {
        ...book,
        available: false
      });
      
      // Crear el préstamo con el título del libro
      return await this.Loan.create({
        ...loanData,
        bookTitle: book.title
      });
    } catch (error) {
      throw new Error(`Error al crear préstamo: ${error.message}`);
    }
  }

  async updateLoan(id, loanData) {
    return await this.Loan.findByIdAndUpdate(id, loanData, { new: true });
  }

  async deleteLoan(id) {
    const loan = await this.Loan.findById(id);
    
    if (!loan) {
      throw new Error('Préstamo no encontrado');
    }
    
    // Si el préstamo se elimina y no fue devuelto, actualizar libro a disponible
    if (!loan.returned) {
      try {
        const bookResponse = await axios.get(`${this.bookApiUrl}/${loan.bookId}`);
        const book = bookResponse.data;
        
        await axios.put(`${this.bookApiUrl}/${loan.bookId}`, {
          ...book,
          available: true
        });
      } catch (error) {
        console.error('Error al actualizar disponibilidad del libro:', error.message);
      }
    }
    
    return await this.Loan.findByIdAndDelete(id);
  }

  async returnLoan(id) {
    const loan = await this.Loan.findById(id);
    
    if (!loan) {
      throw new Error('Préstamo no encontrado');
    }
    
    if (loan.returned) {
      throw new Error('Este préstamo ya fue devuelto');
    }
    
    // Actualizar libro a disponible en API de libros
    try {
      const bookResponse = await axios.get(`${this.bookApiUrl}/${loan.bookId}`);
      const book = bookResponse.data;
      
      await axios.put(`${this.bookApiUrl}/${loan.bookId}`, {
        ...book,
        available: true
      });
      
      // Actualizar préstamo como devuelto
      return await this.Loan.findByIdAndUpdate(id, 
        { returned: true, updatedAt: Date.now() }, 
        { new: true }
      );
    } catch (error) {
      throw new Error(`Error al devolver préstamo: ${error.message}`);
    }
  }
}

module.exports = LoanService;