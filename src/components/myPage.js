import React from 'react';
import BreakStrBtn from '../components/btn/breakStrBtn';
import BreakFinBtn from '../components/btn/breakFinBtn';
import Headers from './header';
import AtBtn from './btn/atBtn';



const MyPage = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
            <Headers />
            <div className='flex justify-center'>
            <AtBtn />
            <BreakStrBtn />
            <BreakFinBtn />
            </div>
            </div>
        </>
    )
};
export default MyPage;



