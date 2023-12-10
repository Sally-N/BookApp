import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import BookList from '../../Components/BookList/BookList';
import { Outlet } from 'react-router-dom';
import { RomanceBooksComponent, HistoryBooksComponent, BusinessBooksComponent, NatureBooksComponent, CrimeBooksComponent, FictionBooksComponent } from '../../Components/Categories/Categories';




const Home = () => {
    const [currentContent, setCurrentContent] = useState('romance');

    const renderContent = () => {
        switch (currentContent) {
            case 'romance':
                return <RomanceBooksComponent />;
            case 'crime':
                return <CrimeBooksComponent />;
            case 'nature':
                return <NatureBooksComponent />;
            case 'business':
                return <BusinessBooksComponent />;
            case 'history':
                return <HistoryBooksComponent />;
            case 'fitness':
                return <FictionBooksComponent />;
            default:
                return null;
        }
    };

    return (
        <main>
            <Header />
            <div className="w-full px-40 pt-10" >
                <div className="flex flex-row flex-wrap justify-between align-middle w-full">
                    <button onClick={() => setCurrentContent('romance')}>Romance</button>
                    <button onClick={() => setCurrentContent('crime')}>Crime</button>
                    <button onClick={() => setCurrentContent('nature')}>Nature</button>
                    <button onClick={() => setCurrentContent('business')}>Business</button>
                    <button onClick={() => setCurrentContent('history')}>Religion</button>
                    <button onClick={() => setCurrentContent('fitness')}>Fitness</button>
                </div>
                {renderContent()}
            </div>
            <BookList />
            <Outlet />
        </main>
    );
};


export default Home;