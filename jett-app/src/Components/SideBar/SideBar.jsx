/*eslint-disable*/
import SideBarItem from "./SideBar-Item";

export const SideBar = ({ isSidebarOpen , items }) => {

    return (
        <div className={`sidebar ${isSidebarOpen ? "close" : ""}`}>
            <a className="logo">
                <i class='bx bxs-hot'></i>
                <div className="logo-name text"><span>Jett</span> Academias</div>
            </a>
            {
                items.map((item, key) => <SideBarItem key={key} item={item} />)
            }
            <div className="side-menu">
                <a href="#" class="logout">
                    <i class='bx bx-log-out-circle'></i>
                    <span className="text">Logout</span>
                </a>
            </div>
        </div>
    );
};

export default SideBar;