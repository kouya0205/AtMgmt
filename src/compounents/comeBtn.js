import React from 'react'

const ComeBtn = () => {
    const comeBtn = () => {
        alert("出勤しました");
    }
    return (
        <div>
            <button onClick={comeBtn} className='text-xl mt-10 mr-10 border-b-[5px] bg-[#b8fc6f] hover:text-[#000] hover:bg-[#c5fd88] hover:border-b-2 hover:border-solid hover:border-[#7ec731] hover:translate-y-px  custom-button'>出勤</button>
        </div>
    )
};

export default ComeBtn