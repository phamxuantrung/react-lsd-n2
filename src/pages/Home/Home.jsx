import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import scene3 from "../../assets/images/scene-3.svg";
import { StartIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("detail")}>
                <div className={cx("heading")}>
                    Chào mừng các bạn đến với nhóm của chúng tôi
                </div>
                <div className={cx("title")}>
                    Chúng tôi là nhóm 2 và chúng tôi rất hân
                    hạnh được chia sẻ với quý vị và các bạn về chủ đề của chúng
                    tôi. Chúng tôi đã dành nhiều thời gian nghiên cứu và chuẩn
                    bị cho thuyết trình này và hy vọng rằng nó sẽ mang lại cho
                    quý vị và các bạn nhiều kiến thức cốt lõi.
                </div>
                <Link to={"/content"}>
                    <div className={cx("btn-start")}>
                        Bắt đầu
                        <StartIcon className={cx("icon")} />
                    </div>
                </Link>
                <div className={cx("feedback")}>
                    Mọi nhận xét và phản biện điền{" "}
                    <a href="https://forms.gle/S8wTd7cLyWPB4NPc7">ở đây</a> !
                </div>
            </div>
            <div className={cx("img")}>
                <img src={scene3} alt="" />
            </div>
        </div>
    );
}

export default Home;
