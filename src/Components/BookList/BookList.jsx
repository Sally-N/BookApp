import React from 'react';
// import Loader from '../Loader/Loader';
import coverImg from "../../Images/cover_not_found.jpg"
import { useGlobalContext } from '../../context';
import "./BookList.css"
import Book from './Book';

// https://covers.openlibrary.org/b/id/240727-S.jpg


const BookList = () => {
    const { books,  resultTitle } = useGlobalContext();

    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
        }
    });

    return (
        <section className='booklist'>
            <div className='container'>
                <div className='section-title'>
                    <h2>{resultTitle}</h2>
                </div>
                <div className='booklist-content grid'>
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList;