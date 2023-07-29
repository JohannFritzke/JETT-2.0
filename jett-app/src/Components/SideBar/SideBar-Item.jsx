import { useState } from "react";


export default function SideBarItem({ item }) {
    const [open, setOpen] = useState(false);


    if (item.childrens) {

        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>

                <div className="sidebar-title onclick">
                    <span>
                        {item.icon && <i className={item.icon} onClick={() => setOpen(!open)}></i>}
                        <label>{item.title}</label>
                    </span>
                    <i class='bx bx-chevron-down toggle-btn text' onClick={() => setOpen(!open)}></i>
                </div>

                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SideBarItem key={index} item={child} />)}
                </div>

            </div>


        )
    } else {
        return(
            <div className="sidebar-item">
                <a href={item.path || "#"} className="plain">
                    <div className="sidebar-title">
                        <span>
                            {item.icon && <i class={item.icon}></i>}
                            <label>{item.title}</label>
                        </span>
                    </div>
                </a>
            </div>
        )
    }
}