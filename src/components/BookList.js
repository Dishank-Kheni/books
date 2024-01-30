import useBookContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
    // const {books} = useContext(BooksContext);
    const{books}= useBookContext();
    const renderBooks = books.map((book) => <BookShow book={book}></BookShow>)

    return <div className="book-list">
        {renderBooks}
    </div>
}

export default BookList;