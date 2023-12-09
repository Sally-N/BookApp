import React, { useState } from "react"
import Love from "./Love";
import Contact from "./Contact";
import Stuff from "./Stuff";



const Categoriesbuttons = () => {
    const [currentContent, setCurrentContent] = useState('home');

    const renderContent = () => {
        switch (currentContent) {
            case 'home':
                return <Love />;
            case 'about':
                return <Contact />;
            case 'contact':
                return <Stuff />;
            default:
                return null;
        }
    };
    return (
        <div className="w-full px-40 pt-10" >
            <div className="flex flex-row flex-wrap justify-between align-middle w-full">
                <button onClick={() => setCurrentContent('home')}>Home</button>
                <button onClick={() => setCurrentContent('about')}>About</button>
                <button onClick={() => setCurrentContent('contact')}>Contact</button>

                {renderContent()}
            </div>
        </div>

    )
}


export default Categoriesbuttons;



// export const Stuff = () => {
//     return (
//         <div>
//             <h2>stuff QUESTIONS?</h2>
//             <p>The easiest thing to do is post on
//                 our <a href="http://forum.kirupa.com">forums</a>.
//             </p>
//         </div>
//     );
// }

// export const Contact = () => {
//     return (
//         <div>
//             <h2>Contact QUESTIONS?</h2>
//             <p>The easiest thing to do is post on
//                 our <a href="http://forum.kirupa.com">forums</a>.
//             </p>
//         </div>
//     );
// }