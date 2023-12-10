import React, { Suspense, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
// import Header from '../../Components/Header/Header';
// import BookList from '../../Components/BookList/BookList';
import { Outlet } from 'react-router-dom';
import { BookCategoryComponent } from '../../Components/Categories/Categories';


const Home = () => {
    const [currentContent, setCurrentContent] = useState('romance');

    // const renderContent = () => {
    //     switch (currentContent) {
    //         case 'romance':
    //             return <RomanceBooksComponent />;
    //         case 'crime':
    //             return <CrimeBooksComponent />;
    //         case 'nature':
    //             return <NatureBooksComponent />;
    //         case 'business':
    //             return <BusinessBooksComponent />;
    //         case 'religion':
    //             return <ReligionBooksComponent />;
    //         case 'fitness':
    //             return <FitnessBooksComponent />;
    //         default:
    //             return <BookList />;
    //     }
    // };

    return (
        <main>
            <Navbar />
            {/* <Header /> */}
            <div className="w-full px-40 pt-10" >
                <div className="flex flex-row flex-wrap justify-between align-middle w-full">
                    <button onClick={() => setCurrentContent('romance')}>Romance</button>
                    <button onClick={() => setCurrentContent('crime')}>Crime</button>
                    <button onClick={() => setCurrentContent('nature')}>Nature</button>
                    <button onClick={() => setCurrentContent('business')}>Business</button>
                    <button onClick={() => setCurrentContent('religion')}>Religion</button>
                    <button onClick={() => setCurrentContent('fitness')}>Fitness</button>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                <BookCategoryComponent name={currentContent}/>
                </Suspense>
            </div>
            
            <Outlet />
        </main>
    );
};


export default Home;