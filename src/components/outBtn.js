import React from 'react'

const OutBtn = () => {
    const outBtn = () => {
        alert("退勤しました");
    }
    return (
        <div>
            <button onClick={outBtn} className='text-xl mt-10  border-b-[5px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button' >退勤</button>
        </div>
    )
};

export default OutBtn;