import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './Components/BookList/BookList';
import BookDetails from './Components/BookDetails/BookDetails'
import Chat from './Pages/Chat/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='book' element={<BookList />} />
        <Route path="book/:id" element={<BookDetails />} />
        <Route path='chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
