import { createContext, useState } from "react";
import axios from 'axios';
const BooksContext = createContext();

function BookProvider({children}){

    const [books, setBooks]=useState([]);

    const fetchBooks=()=>{
        axios.get("http://localhost:3001/books").then((response)=>{
            setBooks(response.data);
        });
    };

    const createBook = (title) => {
        axios.post("http://localhost:3001/books",{
            title
        }).then((response)=>{
            const updateBooks = [...books, response.data];
            setBooks(updateBooks);
        })
    };

    const editBookById = (id, title) => {
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
          const updatedBooks = books.filter((book) => {
                return book.id !== id;
            })
            setBooks(updatedBooks);
        });
    };

    const valueToShare={
        books,
        fetchBooks:fetchBooks,
        createBook:createBook,
        editBookById:editBookById,
        deleteBookById:deleteBookById,
    };

    return (<BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>);
};

export { BookProvider }; //Named export
export default BooksContext;

// import BooksContext, {Provider} from ./books.js