/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the bible");
    const [searchedbooks, setSearchedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchSearchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const { docs } = data;
            console.log(docs);

            if (docs) {
                const booksData = docs.slice(0, 20).map((singleBook) => {
                    const { key, author_name, cover_i, subject_cat, edition_count, first_publish_year, title } = singleBook;
                    return ({
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        subject: subject_cat,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    })
                })
                setSearchedBooks(booksData);

                if (booksData.length > 1) {
                    setResultTitle("Your search results")
                    setLoading(false);
                } else {
                    setResultTitle("No search result");
                    setLoading(false)
                }
            }
            else {
                setSearchedBooks([]);
                setResultTitle("No Search Result Found!");
                setLoading(false);
            }
        } catch (error) {
            console.error();
            setLoading(false);
        }
    }, [searchTerm]);
  


    useEffect(() => {
        fetchSearchBooks();
    }, [searchTerm, loading, fetchSearchBooks]);

    return (
        <AppContext.Provider value={
            {
                loading,
                searchedbooks,
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