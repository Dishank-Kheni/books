import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        onDelete(book.id);
    };

    const changeToggle = () => {
        setToggle(!toggle);
    }


    let content = <h3>{book.title}</h3>

    if (toggle) {
        content = <BookEdit book={book} onEdit={onEdit} closeForm={changeToggle}></BookEdit>
    }


    return <div className="book-show">
        <img alt="books" src='https://picsum.photos/id/1/200/300'></img>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={changeToggle}>Edit</button>
            <button className="delete" onClick={handleClick}>Delete</button>
        </div>
    </div>
}

export default BookShow;