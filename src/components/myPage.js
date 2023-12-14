import React from 'react';
import Headers from './header';
import AtBtn from './btn/atBtn';
import BreakBtn from './btn/breakBtn';
import List from './list';



const MyPage = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
            <Headers />
            <div className='flex justify-center'>
            <AtBtn />
            <BreakBtn />
            </div>
            <List />
            </div>
        </>
    )
};
export default MyPage;



