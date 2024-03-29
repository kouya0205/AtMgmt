import React from 'react';
import { auth } from '../firebase';

const UserInfo = () => {
  return (
    <div className=" text-center relative">
      <img
        src={auth.currentUser.photoURL}
        alt=""
        className="rounded-full w-20 h-20 mt-5 mb-5 ml-[20%] mr-[20%]"
      />
    </div>
  );
};

export default UserInfo;
