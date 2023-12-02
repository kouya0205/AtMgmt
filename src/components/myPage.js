import React from 'react';
import ComeBtn from './comeBtn';
import OutBtn from './outBtn';
import BreakStrBtn from './breakStrBtn';
import BreakFinBtn from './breakFinBtn';

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

