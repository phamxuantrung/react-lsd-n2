import classNames from "classnames/bind";
import { Link, NavLink } from "react-router-dom";
import {
    BriefcaseIcon,
    ChatIcon,
    PuzzleIcon,
    UsersIcon,
} from "../../assets/icons";
import logo from "../../assets/images/logo1.png";
import essayImg from "../../assets/images/essay.png";
import timelineImg from "../../assets/images/timeline.png";
import styles from "./RHeader.module.scss";
import Button from "../../components/Button/Button";
const cx = classNames.bind(styles);

function RHeader({ openMenu, setOpenMenu }) {

    return (
        <div
            id="menu"
            className={cx("wrapper", { open: openMenu })}
        >
            <div>
                <Link to={"/"}>
                    <div className={cx("logo")}>
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className={cx("line")}></div>
                <div className={cx("navbar")}>
                    <NavLink
                        to="/content"
                        className={(nav) => cx({ active: nav.isActive })}
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <div className={cx("item")}>
                            <BriefcaseIcon />
                            <span>Nội dung</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/game"
                        className={(nav) => cx({ active: nav.isActive })}
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <div className={cx("item")}>
                            <PuzzleIcon />
                            <span>Trò chơi</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/team"
                        className={(nav) => cx({ active: nav.isActive })}
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <div className={cx("item")}>
                            <UsersIcon />
                            <span>Thành viên</span>
                        </div>
                    </NavLink>

                    <div className={cx('heading-shortcut')}>Lối tắt</div>

                    <Link
                        to="/content/mindmap"
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <div className={cx("item-shortcut")}>
                            <span>Sơ đồ tư duy</span>
                            <img src={timelineImg} style={{ width: 24, marginLeft: 8 }} alt="" />
                        </div>
                    </Link>
                    <Link
                        to="/content/essay"
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <div className={cx("item-shortcut")}>
                            <span>Tiểu luận</span>
                            <img src={essayImg} style={{ width: 24, marginLeft: 8 }} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={cx("feedback")}>
                <div className={cx("heading")}>Feedback với chúng tôi!</div>
                <div className={cx("des")}>
                    Bạn có bất kì những câu hỏi hay nhận xét nào. Xin
                    vui lòng điền lại vào form gửi tới chúng tôi. Chúng tôi sẽ
                    lắng nghe các bạn.
                </div>
                <a href="https://forms.gle/S8wTd7cLyWPB4NPc7" className={cx("btn-form")}>
                    <Button fullWidth>
                        <ChatIcon /> <span>Gửi tới chúng tôi</span>
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default RHeader;
