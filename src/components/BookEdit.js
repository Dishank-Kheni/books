import { useState } from "react";

function BookEdit({ book, onEdit, closeForm }) {
    const [text, setText] = useState();

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, text);
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