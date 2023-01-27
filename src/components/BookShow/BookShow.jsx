import { useState } from "react";
import {BookEdit} from "../BookEdit"
export const BookShow = ({ book, onDelete,onEdit }) => {
    const[showEdit,setShowEdit]=useState(false)

    const handleDeleteClick=()=>{
        onDelete(book.id)
    }

    const handleEditClick=()=>{
        setShowEdit(!showEdit)
    }
    const handleSubmit=(id,newTitle)=>{
        setShowEdit(false);
        onEdit(id,newTitle)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }
  return (
    <div className="book-show">
        <img alt="book" src={`https://picsum.photos/seed/${book.id}300/200`} />
        <div>{content}</div>
      <div className="actions">
        <button onClick={handleEditClick} className="edit">Edit</button>
        <button onClick={handleDeleteClick} className="delete">Delete</button>
      </div>
    </div>
  );
};
