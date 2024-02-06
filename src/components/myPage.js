import React, { useState, useEffect } from 'react';
import Headers from './header';
import List from './list';
import AtTab from './tab';
import Navbar from './Navbar.jsx';
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';
import { getUserId } from './dbFn';

const MyPage = () => {
  //画面レンダリング時にデータを取得する
  const [Time, setTime] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userId = await getUserId();
      const userDocRef = doc(db, 'users', userId);
      const dateCollection = collection(userDocRef, 'dates');

      const q = query(dateCollection, orderBy('Timestamp', 'desc'), limit(1));
      const querySnapshot = await getDocs(q);

      let latestDocId = '';
      querySnapshot.forEach((doc) => {
        latestDocId = doc.id;
        console.log(latestDocId);
      });

      if (latestDocId) {
        const latestDocRef = doc(dateCollection, latestDocId);
        onSnapshot(latestDocRef, (doc) => {
          if (doc.exists()) {
            console.log(doc.data());
            setTime([doc.data()]);
          } else {
            console.log('No such document!');
          }
        });
      }
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
