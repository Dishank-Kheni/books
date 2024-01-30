import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
    const value = useContext(BooksContext);

    const renderBooks = books.map((book) => <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}></BookShow>)

    return <div className="book-list">
        {value}
        {renderBooks}
    </div>
}

export default BookList;