import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import {BookList} from "./components/BooksList"
function App() {
  const [books, setBooks] = useState([]);

  const createaBooks = (title) => {
    const updateBooks=[...books,{id:Math.round(Math.random()*9999),title}]
    setBooks(updateBooks)
  };

  const editBooks=(id,newTitle)=>{
    const updateBooks = books.map((book)=>{
      if(id===book.id){
        return {...book,title:newTitle}
      }
      return book
    })
    setBooks(updateBooks)
  }

  const deleteBooks=(id)=>{
    const updateBooks = books.filter(book=>{
      return book.id !==id
    })
    setBooks(updateBooks)
  }




  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList onEdit={editBooks} books={books} onDelete={deleteBooks} />
      <BookCreate onCreate={createaBooks} />
    </div>
  );
}

export default App;
