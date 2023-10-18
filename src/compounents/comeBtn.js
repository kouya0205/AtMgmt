import React from 'react'

const ComeBtn = () => {
    const comeBtn = () => {
        alert("出勤しました");
    }
    return (
        <div>
            <button onClick={comeBtn} className='comeBtn btn'>出勤</button>
        </div>
    )
};

export default ComeBtn