import {BookShow} from "../BookShow"
export const BookList=({books,onDelete,onEdit})=>{

    const renderedBooks=books.map((book)=>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    })
    return(
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}