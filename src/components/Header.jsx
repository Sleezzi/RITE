import { useEffect, useState } from "react"
import "../cdn/css/header.css"
export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [sidenav, setSidenav] = useState(false);

    useEffect(() => {
        document.body.className = theme;
        document.querySelector(".theme > span").innerText = `${theme}_mode`;
    }, [theme]);
    useEffect(() => document.querySelector(".sidenav").classList[(sidenav ? "add" : "remove")]("active"), [sidenav]);

    const openNav = () => {
        if (sidenav) {
            setSidenav(false);
        } else {
            setSidenav(true);
        }   
    }
    const toggleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
            setTheme('dark');
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }
    return (
        <header>
            <button onClick={openNav} className="openSidenav">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="/"><h1>RITE</h1></a>
            <button onClick={toggleTheme} className="theme">
                <span class="material-symbols-outlined">dark_mode</span>
            </button>
        </header>
    )
}