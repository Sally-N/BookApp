import React from 'react';
import Header from '../../Components/Header/Header';
import BookList from '../../Components/BookList/BookList';
import { Link } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <BookList />
            <ChatWithUiButton />
        </div>
    );
};


const ChatWithUiButton = () => {
    return <div
    style={{bottom: '10px', right: 0, width: '150px', height: '30px', backgroundColor: '#8d27ae'}}>
        <Link to={'/chat'}>
        <button style={{width: '100%', height: '100%'}}>
            Chat with BookWise
            {/* <span>Bookhub's book bot</span> */}
        </button>
        </Link>
    </div>
}

export default Home;