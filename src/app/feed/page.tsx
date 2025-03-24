"use client";
import { Topbar } from "../components/Topbar";
import useToggle from "../utils/useToggle";

export default function Feed() {
    const { isActive: menuActive, toggle: toggleMenu} = useToggle(false);
    return(
        <div className={`main ${menuActive ? "active" : ""} dark:bg-dark`}>
             <Topbar toggleMenu={toggleMenu} />
             <h1 className="text-center text-4xl mt-12">Este é o feed</h1>
        </div>
    );
}