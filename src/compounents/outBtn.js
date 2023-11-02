import React from 'react'

const OutBtn = () => {
    const outBtn = () => {
        alert("退勤しました");
    }
    return (
        <div>
            <button onClick={outBtn} className='text-xl mt-10 mr-10 border-b-[5px]  bg-[#717af9c4] hover:color-[#000] custom-button' >退勤</button>
        </div>
    )
};

export default OutBtn