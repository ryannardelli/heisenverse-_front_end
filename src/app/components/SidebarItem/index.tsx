interface Item {
  icon: React.ReactNode;
  title: string;
}

interface SidebarItemProps {
  item: Item;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null ) => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <li
      className={activeIndex === index ? "hovered" : ""}
      onClick={() => setActiveIndex(index)}
    >
      <a href="#">
        <span className="icon">{item.icon}</span>
        <span className="title">{item.title}</span>
      </a>
    </li>
  );
};
