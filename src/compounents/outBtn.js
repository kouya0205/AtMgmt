import React from 'react'

const OutBtn = () => {
    const outBtn = () => {
        alert("退勤しました");
    }
    return (
        <div>
            <button onClick={outBtn} className='outBtn'>退勤</button>
        </div>
    )
};

export default OutBtn