import React, { useEffect, useState } from "react";
import Book from "../BookList/Book";
import coverImg from "../../Images/cover_not_found.jpg";
import '../BookList/BookList.css';


export const BookCategoryComponent = (currentContent) => {
    const [catBooks, setCatBooks] = useState([]);
    const [booksWithCovers, setBooksWithCovers] = useState([]);

    console.log(currentContent, 'currentContent')

    async function getRomanceBooks() {
        try {
            const res = await fetch(`http://openlibrary.org/subjects/${currentContent}.json`);
            console.log(res)
            const data = await res.json();
            setCatBooks(data.works);
            console.log(data.works, 'data');
        } catch (error) {
            console.log(error, 'error')
        }

        const booksWithCoversData = catBooks.map((singleBook) => {
            console.log(singleBook, 'singlebook')
            return {
                ...singleBook,
                id: (singleBook.key).replace("/works/", ""),
                cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
            }
        })

        setBooksWithCovers(booksWithCoversData);

    }

    useEffect(() => {
        getRomanceBooks();
    })
    return (
        <section className='booklist'>
            {booksWithCovers && (
                <div className='container'>
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
            )}
        </section>
    );
}

export const CrimeBooksComponent = () => {
    const [catBooks, setCatBooks] = useState([]);
    const [booksWithCovers, setBooksWithCovers] = useState([]);

    async function getCrimeBooks() {
        try {
            const res = await fetch("http://openlibrary.org/subjects/crime.json");
            console.log(res)
            const data = await res.json();
            setCatBooks(data.works);
            console.log(data.works, 'data');
        } catch (error) {
            console.log(error, 'error')
        }

        const booksWithCoversData = catBooks.map((singleBook) => {
            console.log(singleBook, 'singlebook')
            return {
                ...singleBook,
                id: (singleBook.key).replace("/works/", ""),
                cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
            }
        })

        setBooksWithCovers(booksWithCoversData);

    }

    useEffect(() => {
        getCrimeBooks();
    })
    return (
        <section className='booklist'>
            {booksWithCovers && (
                <div className='container'>
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
            )}
        </section>
    );
}

export const NatureBooksComponent = () => {
    const [catBooks, setCatBooks] = useState([]);
    const [booksWithCovers, setBooksWithCovers] = useState([]);

    async function getNatureBooks() {
        try {
            const res = await fetch("http://openlibrary.org/subjects/nature.json");
            console.log(res)
            const data = await res.json();
            setCatBooks(data.works);
            console.log(data.works, 'data');
        } catch (error) {
            console.log(error, 'error')
        }

        const booksWithCoversData = catBooks.map((singleBook) => {
            console.log(singleBook, 'singlebook')
            return {
                ...singleBook,
                id: (singleBook.key).replace("/works/", ""),
                cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
            }
        })

        setBooksWithCovers(booksWithCoversData);

    }

    useEffect(() => {
        getNatureBooks();
    })
    return (
        <section className='booklist'>
            {booksWithCovers && (
                <div className='container'>
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
            )}
        </section>
    );
}


export const ReligionBooksComponent = () => {
    const [catBooks, setCatBooks] = useState([]);
    const [booksWithCovers, setBooksWithCovers] = useState([]);

    async function getReligionBooks() {
        try {
            const res = await fetch("http://openlibrary.org/subjects/religion.json");
            console.log(res)
            const data = await res.json();
            setCatBooks(data.works);
            console.log(data.works, 'data');
        } catch (error) {
            console.log(error, 'error')
        }

        const booksWithCoversData = catBooks.map((singleBook) => {
            console.log(singleBook, 'singlebook')
            return {
                ...singleBook,
                id: (singleBook.key).replace("/works/", ""),
                cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
            }
        })

        setBooksWithCovers(booksWithCoversData);

    }

    useEffect(() => {
        getReligionBooks();
    })
    return (
        <section className='booklist'>
            {booksWithCovers && (
                <div className='container'>
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
            )}
        </section>
    );
}

export const BusinessBooksComponent = () => {
    const [catBooks, setCatBooks] = useState([]);
    const [booksWithCovers, setBooksWithCovers] = useState([]);

    async function getBusinessBooks() {
        try {
            const res = await fetch("http://openlibrary.org/subjects/business.json");
            console.log(res)
            const data = await res.json();
            setCatBooks(data.works);
            console.log(data.works, 'data');
        } catch (error) {
            console.log(error, 'error')
        }

        const booksWithCoversData = catBooks.map((singleBook) => {
            console.log(singleBook, 'singlebook')
            return {
                ...singleBook,
                id: (singleBook.key).replace("/works/", ""),
                cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
            }
        })

        setBooksWithCovers(booksWithCoversData);

    }

    useEffect(() => {
        getBusinessBooks()
    })
    return (
        <section className='booklist'>
            {booksWithCovers && (
                <div className='container'>
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
            )}
        </section>
    );
}

export const FitnessBooksComponent = () => {
    const [catBooks, setCatBooks] = useState([]);
    const [booksWithCovers, setBooksWithCovers] = useState([]);

    async function getFitnessBooks() {
        try {
            const res = await fetch("http://openlibrary.org/subjects/fitness.json");
            console.log(res)
            const data = await res.json();
            setCatBooks(data.works);
            console.log(data.works, 'data');
        } catch (error) {
            console.log(error, 'error')
        }

        const booksWithCoversData = catBooks.map((singleBook) => {
            console.log(singleBook, 'singlebook')
            return {
                ...singleBook,
                id: (singleBook.key).replace("/works/", ""),
                cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
            }
        })

        setBooksWithCovers(booksWithCoversData);

    }

    useEffect(() => {
        getFitnessBooks()
    })
    return (
        <section className='booklist'>
            {booksWithCovers && (
                <div className='container'>
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
            )}
        </section>
    );
}


