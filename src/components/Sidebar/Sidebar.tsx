import React from "react";

import {MENU_ITEM} from "@/components/Sidebar/MenuItem";
import ToggleSidebarItem from "@/components/Sidebar/ToggleSidebarItem";
import SimpleSidebarItem from "@/components/Sidebar/SimpleSidebarItem";

const Sidebar = ({isOpen}: { isOpen: boolean }) => {

    return (
        <aside
            id="sidebar-multi-level-sidebar"
            className={`fixed bg-slate-900 top-14 right-0 z-40 w-52 h-screen transition-transform  ${isOpen ? "translate-x-0" : "translate-x-full"} `}
            aria-label="Sidebar"
        >
            <div className="h-full   py-3 overflow-y-auto bg-slate-900  ">
                <ul className=" font-medium divide-y divide-slate-950 bg-slate-900 mb-12">
                    {
                        MENU_ITEM.map((item) => (<>
                            {
                                item.sub ? <ToggleSidebarItem menuItem={item}/> :
                                    <SimpleSidebarItem item={item}/>
                            }
                        </>))
                    }
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
