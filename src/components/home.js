import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth, Googleprovider, Githubproveider, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import MyPage from './myPage';
import Clock from './clock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Timestamp, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getUserId } from './dbFn';

function Home() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<MyPage />} />
        </Routes>
      ) : (
        <div>
          <Clock />
          <div className="flex justify-center flex-col items-center">
            <SignInWithGoogle />
            <SignInWithLine />
            <SignInWithGithub />
          </div>
        </div>
      )}
    </Router>
  );
}

export default Home;

function SignInWithGoogle() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const date = new Date();
        const userId = await getUserId();
        const userDocRef = doc(db, 'users', userId);
        const dateCollection = collection(userDocRef, 'dates');
        const dateId = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`;
        const dateDocRef = doc(dateCollection, dateId);
        const docSnap = await getDoc(dateDocRef);
        if (!docSnap.exists()) {
          await setDoc(
            dateDocRef,
            {
              comeIn: '00:00:00',
              comeOut: '00:00:00',
              breakStr: '00:00:00',
              breakFin: '00:00:00',
              state: 'out',
              states: 'end',
              Timestamp: Timestamp.now(),
            },
            { merge: true }
          );
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, Googleprovider);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  if (user) {
    return <MyPage />;
  }
  return (
    <>
      <button
        onClick={signInGoogle}
        className=" bg-white btn-sns mt-7 flex items-center border-[#D0D5DD] border-[1px]"
      >
        <FcGoogle className=" ml-4 text-2xl" />
        <p className=" ml-4 text-[#a2a6ac]">Googleログイン</p>
      </button>
    </>
  );
}

function SignInWithLine() {
  const signInLine = () => {
    alert('LINEログインは現在開発中です。');
  };
  return (
    <>
      <button
        onClick={signInLine}
        className=" bg-white btn-sns flex items-center border-[#06C755] border-[1px]"
      >
        <img src="/LINE_Brand_icon.png" alt="" className=" w-6 ml-4 mr-4" />
        <p className=" text-[#06C755]">LINEログイン</p>
      </button>
    </>
  );
}

function SignInWithGithub() {
  const signInGithub = () => {
    signInWithPopup(auth, Githubproveider);
  };
  return (
    <button
      onClick={signInGithub}
      className=" bg-white btn-sns flex items-center border-[1px] border-black"
    >
      <AiFillGithub className=" fill-slate-900 ml-4 text-[30px]" />
      <p className=" text-black">Githubログイン</p>
    </button>
  );
}
