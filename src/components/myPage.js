import React from 'react';
import Headers from './header';
import List from './list';
import AtTab from './tab';
import Navbar from './Navbar.jsx';



const MyPage = () => {
    return (
        <>
            <div className=' flex flex-col justify-center md:flex-row-reverse '>
                <div className=' md:m-0 md:mr-o'>
                    <Headers />
                    <List />
                    <AtTab />
                </div>
                <Navbar />
            </div>
        </>
    )
};
export default MyPage;



