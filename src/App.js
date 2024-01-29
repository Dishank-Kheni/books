import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
    const [books, setBooks] = useState([]);
    // const [count, setCount] = useState(0);

    const fetchBooks=()=>{
        axios.get("http://localhost:3001/books").then((response)=>{
            setBooks(response.data);
        });
    };

    useEffect(()=>{
        fetchBooks();
    },[]);

    const createBook = (title) => {

        axios.post("http://localhost:3001/books",{
            title
        }).then((response)=>{
            const updateBooks = [...books, response.data];
            setBooks(updateBooks);
        })

        // setCount(count + 1);
        // console.log(books);
    };

    const editBookById = (id, title) => {
        // book_copy = { ...books };
        
        axios.put(`http://localhost:3001/books/${id}`,{
            title:title
        }).then((response)=>{
            const updateBooks = books.map((book) => {
                if (book.id == id) {
                    return { ...book, ...response.data };
                }
                return book;
            })
            setBooks(updateBooks);
        });
    };
    const deleteBookById = (id) => {

        axios.delete(`http://localhost:3001/books/${id}`).then((response)=>{
            // filter method returns brand new array
            const updatedBooks = books.filter((book) => {
                return book.id !== id;
            })
            setBooks(updatedBooks);
        });


    };

    return <div className="app">
        <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}>
        </BookList>
        <BookCreate onCreate={createBook}>
        </BookCreate>
    </div>
}

export default App;