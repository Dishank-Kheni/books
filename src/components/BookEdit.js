import { useState } from "react";
import useBookContext from "../hooks/use-books-context";
function BookEdit({ book, closeForm }) {
    // const {editBookById}= useContext(BooksContext);
    const [text, setText] = useState();
    const {editBookById} = useBookContext();
    const changeHandler = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, text);
        closeForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" onChange={changeHandler} value={text}></input>
            <button className="submit">Update</button>
        </form>
    );
}

export default BookEdit;