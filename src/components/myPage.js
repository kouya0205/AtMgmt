import React, { useState, useEffect } from 'react';
import Headers from './header';
import List from './list';
import AtTab from './tab';
import Navbar from './Navbar.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const MyPage = () => {
  const [Time, setTime] = useState([]);
  useEffect(() => {
    const getUserData = collection(db, 'users');
    getDocs(getUserData).then((querySnapshot) => {
      console.log(querySnapshot.docs.map((doc) => doc.data()));
      setTime(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, [setTime]);

  return (
    <>
      <div className=" flex flex-col min-[769px]:flex-row-reverse ">
        <div className="">
          <Headers />
          {Time.map((time) => (
            <List
              key={time.id}
              comeInTime={time.comeIn}
              comeOutTime={time.comeOut}
              breakStrTime={time.breakStr}
              breakFinTime={time.breakFin}
            />
          ))}
          <AtTab />
        </div>
        <Navbar />
      </div>
    </>
  );
};
export default MyPage;
