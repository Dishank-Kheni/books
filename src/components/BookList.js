import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
    const renderBooks = books.map((book) => <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}></BookShow>)

    return <div className="book-list">
        {renderBooks}
    </div>
}

export default BookList;