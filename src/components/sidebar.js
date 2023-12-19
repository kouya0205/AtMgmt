import React from 'react';
import { SidebarData } from './sidebarData';
import UserInfo from './userInfo';
import SignOutBtn from './btn/signOutBtn';

function Sidebar() {    
    const [sidebar, setSidebar] = React.useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <> 
        <div className=' ml-1 mt-1 hidden cursor-pointer max-md:block ' onClick={showSidebar}>
            <div className=' w-6 h-1 bg-[#466a91] m-1'></div>
            <div className=' w-6 h-1 bg-[#466a91] m-1'></div>
        </div>
        <div className=' h-[100%] w-[250px] bg-[#466a91] flex justify-center flex-col max-md:opacity-0 max-md:absolute max-md:translate-y-[100] overflow-x-hidden'>
        
        <UserInfo />
            <ul className=' h-auto p-0 w-[100%] '>
                {SidebarData.map((value, key) => { 
                    return (
                    <li key={key} className=" " onClick={() => {
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


