import { useContext, useState } from "react";

import BooksContext from "../context/bookContext";

function BookCreate() {
    const {createBook}= useContext(BooksContext);
    const [ title, setTitle ] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>
}

export default BookCreate;