// import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

// export const SwitchTheme = () => {
//   return (
//     <div className="relative w-14 h-7 hidden md:block">
//       <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-yellow-500">
//         <IoSunnyOutline size={16} />
//       </div>

//       <input
//         id="switch-component-1"
//         type="checkbox"
//         className="peer appearance-none w-14 h-7 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
//       />

//       <label
//         htmlFor="switch-component-1"
//         className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-7 peer-checked:border-slate-800 cursor-pointer"
//       ></label>

//       <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-slate-300 peer-checked:text-white">
//         <IoMoonOutline size={16} />
//       </div>
//     </div>
//   );
// };

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const SwitchTheme = () => {
  const [isDark, setIsDark] = useState(false);

  // Checar preferência do usuário ao carregar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsDark(checked);

    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="relative w-14 h-7 hidden md:block">
      <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-yellow-500">
        <IoSunnyOutline size={16} />
      </div>

      <input
        id="switch-component-1"
        type="checkbox"
        checked={isDark}
        onChange={handleToggle}
        className="peer appearance-none w-14 h-7 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
      />

      <label
        htmlFor="switch-component-1"
        className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-7 peer-checked:border-slate-800 cursor-pointer"
      ></label>

      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-slate-300 peer-checked:text-white">
        <IoMoonOutline size={16} />
      </div>
    </div>
  );
};

