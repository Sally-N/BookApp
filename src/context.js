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

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const { docs } = data;
            console.log(docs);
        } catch (error) {
            console.error();
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return ( 
        <AppContext.Provider value = {
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

export {AppContext, AppProvider}