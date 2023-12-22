import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { DownloadIcon } from "../../assets/icons";
import styles from "./THeader.module.scss";
import logo from "../../assets/images/logo2.png"
import Button from "../../components/Button/Button";
const cx = classNames.bind(styles);

function THeader() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("logo")}>
                <img src={logo} alt="" />
            </div>
            <div className={cx("navbar")}>
                <Link to={"/"} className={cx("item", "active")}>
                    Trang chủ
                </Link>
                <Link to={"/content"} className={cx("item")}>
                    Nội dung
                </Link>
                <Link to={"/game"} className={cx("item")}>
                    Trò chơi
                </Link>
                <Link to={"/team"} className={cx("item")}>
                    Thành viên
                </Link>
            </div>
            <a href="./lsd-group2.zip" download >
                <Button reddish>
                    <span>Tải xuống</span>
                    <DownloadIcon />
                </Button>

            </a>
        </div>
    );
}

export default THeader;
