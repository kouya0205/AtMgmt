import React from 'react';
import ComeBtn from '../components/btn/comeBtn';
import OutBtn from '../components/btn/outBtn';
import BreakStrBtn from '../components/btn/breakStrBtn';
import BreakFinBtn from '../components/btn/breakFinBtn';
import Headers from './header';
import { addWorkHours, displayWorkHours } from '../firestore.js';

const MyPage = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
            <Headers />
            <div className='flex justify-center'>
            <ComeBtn />
            <OutBtn />
            <BreakStrBtn />
            <BreakFinBtn />
            </div>
            <div>
                <h1>一週間の勤務時間を表示</h1>
                <p>出勤時刻と退勤時刻をFirestoreに追加</p>
                <p>Firestoreから出勤時刻と退勤時刻を取得して表示</p>
                <button onClick={addWorkHours}>出勤時刻と退勤時刻をFirestoreに追加</button>
                <button onClick={displayWorkHours}>Firestoreから出勤時刻と退勤時刻を取得して表示</button>
                

            </div>
            </div>
        </>
    )
};
export default MyPage;



// 出勤時刻と退勤時刻を追加
addWorkHours();

// 出勤時刻と退勤時刻を表示
displayWorkHours();