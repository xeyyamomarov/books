import { useState, useEffect } from "react";
import axios from "axios";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BooksList";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createaBooks = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };

  const editBooks = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log(response);
    const updateBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const deleteBooks = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`)
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList onEdit={editBooks} books={books} onDelete={deleteBooks} />
      <BookCreate onCreate={createaBooks} />
    </div>
  );
}

export default App;
