import React from 'react';
import Headers from './header';
import List from './list';
import AtTab from './tab';
import Navbar from './Navbar.jsx';



const MyPage = () => {
    return (
        <>
            <div className=' flex flex-col min-[769px]:flex-row-reverse '>
                <div className=''>
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



