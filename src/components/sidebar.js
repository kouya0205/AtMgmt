import React from 'react';
import { SidebarData } from './sidebarData';
import UserInfo from './userInfo';
import SignOutBtn from './btn/signOutBtn';

function Sidebar() {    
    return (
        <>
        <div className=' h-[100%] w-[250px] bg-[#466a91] flex justify-center flex-col'>
        <UserInfo />
            <ul className=' h-auto p-0 w-[100%]'>
                {SidebarData.map((value, key) => { 
                    return (
                    <li key={key} className="" onClick={() => {
                    window.location.pathname = value.link;
                    }}>
                    <div id='title' className=' w-[100%] h-[100%] items-center text-white text-center mt-4 mb-4'>{value.title}</div>
                    </li>
                );
                })}
            </ul>
            <SignOutBtn />
        </div>
        </>
        
    )
}

export default Sidebar;


