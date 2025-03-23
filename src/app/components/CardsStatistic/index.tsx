import {
  IoChatbubbleOutline,
  IoEyeOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";

export const CardsStatistic = () => {
  return (
    <div className="cardBox dark:bg-dark">
      <div className="card">
        <div>
          <div className="numbers dark:text-light">123</div>
          <div className="cardName dark:text-light">Visitas</div>
        </div>
        <div className="iconBx">
          <IoEyeOutline className="dark:text-light" size={42} />
        </div>
      </div>

      <div className="card">
        <div>
          <div className="numbers dark:text-light">20</div>
          <div className="cardName dark:text-light">Publicações</div>
        </div>
        <div className="iconBx">
          <MdOutlineArticle className="dark:text-light" size={42} />
        </div>
      </div>

      <div className="card">
        <div>
          <div className="numbers dark:text-light">14</div>
          <div className="cardName dark:text-light">Favoritos</div>
        </div>
        <div className="iconBx">
          <IoHeartOutline className="dark:text-light" size={42} />
        </div>
      </div>

      <div className="card">
        <div>
          <div className="numbers dark:text-light">18</div>
          <div className="cardName dark:text-light">Comentários</div>
        </div>
        <div className="iconBx">
          <IoChatbubbleOutline className="dark:text-light" size={42} />
        </div>
      </div>
    </div>
  );
};
