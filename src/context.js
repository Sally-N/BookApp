/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {
    useState,
    useContext,
    useEffect
}
    from 'react';
import { useCallback } from 'react';

const URL = "http: //openlibrary.org/search.json?title=the+lord+of+the+rings";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world ");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const { docs } = data;

            if (docs) {
                const booksData = docs.slice(0, 20).map((singleBook) => {
                    const { key, author_name, cover_i, subject_cat, edition_count, first_publish_year, title } = singleBook;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        subject: subject_cat,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                })
                setBooks(booksData);

                if (booksData.length > 1) {
                    setResultTitle("Your search results")
                } else {
                    setResultTitle("No search result")
                }
            }
            else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
        } catch (error) {
            console.error();
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={
            {
                loading,
                books,
                setSearchTerm,
                resultTitle,
                setResultTitle
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }