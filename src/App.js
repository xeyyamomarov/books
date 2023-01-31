import { useEffect } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BooksList";
import useBooksContext from "./hooks/use-books-context";
function App() {
  const { books} = useBooksContext();
  useEffect(() => {
    // fetchBooks();
    console.log(books)
    localStorage.setItem("books",JSON.stringify(books))
  }, [books]);
  // console.log(books)

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
