import { IoChatbubbleOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";

export const CardsStatistic = () => {
    return (
        <div className="cardBox">
            <div className="card">
                <div>
                    <div className="numbers">123</div>
                    <div className="cardName">Visitas</div>
                </div>
                <div className="iconBx">
                    <IoEyeOutline size={32} />
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">20</div>
                    <div className="cardName">Posts</div>
                </div>
                <div className="iconBx">
                    <MdOutlineArticle size={32} />
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">14</div>
                    <div className="cardName">Favoritos</div>
                </div>
                <div className="iconBx">
                    <IoHeartOutline size={32} />
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">18</div>
                    <div className="cardName">Comentários</div>
                </div>
                <div className="iconBx">
                    <IoChatbubbleOutline size={32} />
                </div>
            </div>
        </div>
    );
}