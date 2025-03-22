import { IoSearchOutline } from "react-icons/io5";

export const SearchTop = () => {
  return (
    <div className="search">
      <label>
        <input type="text" placeholder="Pesquise aqui" />
        <IoSearchOutline className="icon-search" size={20} />
      </label>
    </div>
  );
};
