import { useState } from "react";
import useBookContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
    // const{deleteBookById} = useContext(BooksContext);
    
    const {deleteBookById}= useBookContext();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        deleteBookById(book.id);
    };

    const changeToggle = () => {
        setToggle(!toggle);
    }


    let content = <h3>{book.title}</h3>

    if (toggle) {
        content = <BookEdit book={book} closeForm={changeToggle}></BookEdit>
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