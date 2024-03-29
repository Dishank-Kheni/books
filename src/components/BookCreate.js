import { useState } from "react";
import useBookContext from "../hooks/use-books-context";



function BookCreate() {
    const {createBook}= useBookContext();
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