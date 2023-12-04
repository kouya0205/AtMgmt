import React from 'react';
import ComeBtn from '../components/btn/comeBtn';
import OutBtn from '../components/btn/outBtn';
import BreakStrBtn from '../components/btn/breakStrBtn';
import BreakFinBtn from '../components/btn/breakFinBtn';

const MyPage = () => {
    return (
        <>
            <div className='flex justify-center'>
            <ComeBtn />
            <OutBtn />
            <BreakStrBtn />
            <BreakFinBtn />
            </div>
        </>
    )
};
export default MyPage;

