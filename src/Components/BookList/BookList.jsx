import React from 'react';
import coverImg from "../../Images/cover_not_found.jpg"
import { useGlobalContext } from '../../context';
import "./BookList.css"
import Book from './Book';


const BookList = () => {
    const { searchedbooks, loading, resultTitle } = useGlobalContext();

    const booksWithCovers = searchedbooks.map((singleBook) => {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
        }
    });


    return (
        <section className='booklist'>
            { booksWithCovers ? (
                <div className='container'>
                    <div className='section-title'>
                        <h2>{resultTitle}</h2>
                    </div>
                    <div className='gap-12 grid'>
                        {
                            booksWithCovers.slice(0, 30).map((item, index) => {
                                return (
                                    <Book key={index} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
            ): loading }
        </section>
    )
}

export default BookList;