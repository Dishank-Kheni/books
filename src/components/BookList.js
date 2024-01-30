import { useContext } from "react";
import BooksContext from "../context/bookContext";
import BookShow from "./BookShow";

function BookList() {
    const {books} = useContext(BooksContext);

    const renderBooks = books.map((book) => <BookShow book={book}></BookShow>)

    return <div className="book-list">
        {renderBooks}
    </div>
}

export default BookList;