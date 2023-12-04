import React, { useState } from 'react';

const ComeBtn = () => {
    const [currentTime, setCurrentTime] = useState('');

    const comeBtn = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const weekday = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        const formattedTime = `${year}/${month}/${day}(${weekday})${hour}:${minute}:${second}`;
        setCurrentTime(formattedTime);
    };

    return (
        <div>
            
                <button onClick={comeBtn} className='text-xl mt-10 mr-10 border-b-[5px] bg-[#b8fc6f] hover:text-[#000] hover:bg-[#c5fd88] hover:border-b-2 hover:border-solid hover:border-[#7ec731] hover:translate-y-px  custom-button'>出勤</button>
                <p className=' text-2xs'>{currentTime}</p>
        </div>
    );
};

export default ComeBtn;
