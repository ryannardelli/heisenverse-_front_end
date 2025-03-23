import { IoSearchOutline } from "react-icons/io5";

export const SearchTop = () => {
  return (
    <div className="search">
      <label>
        <input
          className="dark:bg-dark dark:text-light"
          type="text"
          placeholder="Pesquise aqui"
        />
        <IoSearchOutline className="icon-search  dark:text-light" size={20} />
      </label>
    </div>
  );
};
