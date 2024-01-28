import React, { useState, useEffect } from 'react';
import Headers from './header';
import List from './list';
import AtTab from './tab';
import Navbar from './Navbar.jsx';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { getUserId } from './dbFn';

const MyPage = () => {
  const [Time, setTime] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userId = await getUserId();
      const userDocRef = doc(db, 'users', userId);
      onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          console.log(doc.data());
          setTime([doc.data()]);
        } else {
          console.log('No such document!');
        }
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" flex flex-col min-[769px]:flex-row-reverse ">
        <div className="">
          <Headers />
          {Array.isArray(Time) &&
            Time.map((time) => (
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
