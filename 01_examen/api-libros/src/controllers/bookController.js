
class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  getAllBooks = async (req, res) => {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener libros", error: error.message });
    }
  };

  getBookById = async (req, res) => {
    try {
      const book = await this.bookService.getBookById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Libro no encontrado" });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el libro", error: error.message });
    }
  };

  createBook = async (req, res) => {
    try {
      const book = await this.bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el libro", error: error.message });
    }
  };

  updateBook = async (req, res) => {
    try {
      const book = await this.bookService.updateBook(req.params.id, req.body);
      if (!book) {
        return res.status(404).json({ message: "Libro no encontrado" });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar el libro", error: error.message });
    }
  };

  deleteBook = async (req, res) => {
    try {
      const book = await this.bookService.deleteBook(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Libro no encontrado" });
      }
      res.status(200).json({ message: "Libro eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el libro", error: error.message });
    }
  };
}

module.exports = BookController;