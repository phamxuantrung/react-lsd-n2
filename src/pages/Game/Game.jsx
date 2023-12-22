import classNames from "classnames/bind";
import styles from "./Game.module.scss";
import puzzle from "../../assets/images/baamboozle-removebg-preview.png";
import spinwheel from "../../assets/images/spin-wheel.png";

const cx = classNames.bind(styles);
function Game() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("card-game")}>
                <div
                    className={cx("item")}
                    style={{
                        background: `url(https://img.freepik.com/free-vector/night-cityscape-background-moonlit-urban-park_107791-16787.jpg) center center /cover no-repeat`,
                    }}
                >
                    <div className={cx("overlay", "type1")}></div>
                    <div className={cx("infor")}>
                        <h1>Pick Lucky</h1>
                        <p>Một chút may mắn</p>
                        <span onClick={() => {window.open("/play/pick-lucky")}}>
                            <div>Chơi Ngay</div>
                        </span>
                    </div>
                    <img src={puzzle} alt="" />
                </div>
                <div
                    className={cx("item")}
                    style={{
                        background: `url(https://i.imgur.com/NAQ0dTR.jpg) center center /cover no-repeat`,
                    }}
                >
                    <div className={cx("overlay", "type2")}></div>
                    <div className={cx("infor")}>
                        <h1>Spin The Wheel</h1>
                        <p>Một chút may mắn</p>
                        <div
                            onClick={() => {
                                alert("Trò chơi chưa được phát triển");
                            }}
                            style={{ cursor: "no-drop" }}
                        >
                            Chơi Ngay
                        </div>
                    </div>
                    <img src={spinwheel} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Game;
