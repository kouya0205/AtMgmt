import React from 'react'

function breakStrBtn() {
    const breakStrBtn = () => {
        alert('休憩を始めました');
    }
        return (
    <div>
        <button onClick={breakStrBtn} className='text-xl mt-10  border-b-[5px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button ml-11 mr-10' >休憩開始</button>
    </div>
        )
}

export default breakStrBtn;