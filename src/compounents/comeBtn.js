import React from 'react'

const ComeBtn = () => {
    const comeBtn = () => {
        alert("出勤しました");
    }
    return (
        <div>
            <button onClick={comeBtn} className='text-xl mt-10 mr-10 border-b-5 border-solid-[#7ec731] bg-[#b8fc6f] hover:color-[#000] custom-button'>出勤</button>
        </div>
    )
};

export default ComeBtn