import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/bookContext";

function App() {
    const {fetchBooks} = useContext(BooksContext);

    useEffect(()=>{
        fetchBooks();
    },[]);

    return <div className="app">
        <BookList/>
        <BookCreate/>
    </div>
}

export default App;