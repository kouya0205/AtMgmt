import React from 'react';
import { SidebarData } from './sidebarData';

function Sidebar() {    
    return (
        <div className=''>
            <ul className=''>
                {SidebarData.map((value, key) => { 
                    return (
                        <li key={key} className='' onClick={() => {
                            window.location.pathname = value.link;
                        }}>
                            <div id='title'>{value.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar;