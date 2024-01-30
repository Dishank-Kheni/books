import { useContext } from "react";
import BooksContext from "../context/bookContext";

export default function useBookContext(){
    useContext(BooksContext);
};