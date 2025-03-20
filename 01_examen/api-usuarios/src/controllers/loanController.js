class LoanController {
    constructor(loanService) {
      this.loanService = loanService;
    }
  
    getAllLoans = async (req, res) => {
      try {
        const loans = await this.loanService.getAllLoans();
        res.status(200).json(loans);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    getLoanById = async (req, res) => {
      try {
        const loan = await this.loanService.getLoanById(req.params.id);
        if (!loan) {
          return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.status(200).json(loan);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    createLoan = async (req, res) => {
      try {
        const loan = await this.loanService.createLoan(req.body);
        res.status(201).json(loan);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  
    updateLoan = async (req, res) => {
      try {
        const loan = await this.loanService.updateLoan(req.params.id, req.body);
        if (!loan) {
          return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.status(200).json(loan);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  
    deleteLoan = async (req, res) => {
      try {
        const loan = await this.loanService.deleteLoan(req.params.id);
        if (!loan) {
          return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.status(200).json({ message: 'Préstamo eliminado correctamente' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    returnLoan = async (req, res) => {
      try {
        const loan = await this.loanService.returnLoan(req.params.id);
        res.status(200).json(loan);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  }
  
  module.exports = LoanController;