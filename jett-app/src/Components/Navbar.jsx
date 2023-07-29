
export const Navbar = ({ handleSidebarToggle }) => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLighMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLighMode();
    }

    return (
        <div className="content">
            <nav>
                <i class='bx bx-menu' onClick={handleSidebarToggle}></i>
                <div>
                    <input type="checkbox" id="theme-toggle" hidden onChange={toggleTheme} />
                    <label htmlFor="theme-toggle" className="theme-toggle">
                        <i class='bx bxs-sun'></i>
                        <i class='bx bxs-moon' ></i>
                    </label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;