import React from 'react'

function breakFinBtn() {

    
        const breakFinBtn = () => {
            alert('休憩から戻りました');
        }
            return (
        <div>
            <button onClick={breakFinBtn} className='text-xl mt-10  border-b-[5px]  bg-[#717af9c4] hover:color-[#000] hover:bg-[#8a92fdc4] hover:border-b-2 hover:border-[#5a65fec4] hover:translate-y-px custom-button ml-12 mr-10'>休憩終了</button>
        </div>
    )
}

export default breakFinBtn