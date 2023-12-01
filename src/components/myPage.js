import React from 'react';
import UserInfo from './userInfo';
import ComeBtn from './comeBtn';
import OutBtn from './outBtn';

const MyPage = () => {
    return (
        <>
        <UserInfo />
            <div className='flex justify-center'>
            <ComeBtn />
            <OutBtn />
            </div>
        </>
    )
};
export default MyPage;

