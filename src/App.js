import { useEffect } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BooksList";
import useBooksContext from "./hooks/use-books-context";
function App() {

  const {fetchBooks}= useBooksContext()
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
