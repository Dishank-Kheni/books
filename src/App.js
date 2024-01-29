import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);
    // const [count, setCount] = useState(0);

    const createBook = (title) => {

        const updateBooks = [...books, { id: Math.random() * 999, title }];

        setBooks(updateBooks);
        // setCount(count + 1);
        // console.log(books);
    };

    const editBookById = (id, title) => {
        // book_copy = { ...books };
        const updateBooks = books.map((book) => {
            if (book.id == id) {
                return { id, title };
            }
            return book;
        })
        // book_copy[index] = title;
        setBooks(updateBooks);
    };
    const deleteBookById = (id) => {
        // filter method returns brand new array
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    return <div className="app">
        <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}>
        </BookList>
        <BookCreate onCreate={createBook}>
        </BookCreate>
    </div>
}

export default App;