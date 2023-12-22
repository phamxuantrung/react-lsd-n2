import RHeader from "../../parts/RHeader/RHeader";
import classNames from "classnames/bind";
import styles from "./NavRight.module.scss";
import { DownloadIcon, MenuIcon } from "../../assets/icons";
import { useState } from "react";
import Button from "../../components/Button/Button";
const cx = classNames.bind(styles);

function NavRight({ children }) {

    const [openMenu, setOpenMenu] = useState(false)

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className={cx("wrapper")}>
            <RHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div className={cx("page")}>{children}</div>
            <div className={cx("name-content")}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className={cx("btn-menu")} onClick={handleClickMenu}>
                        <MenuIcon className={cx('icon')} />
                    </div>
                    <div className={cx("heading")}>
                        Nhóm 2 - Lịnh Sử Đảng Cộng Sản Việt Nam
                    </div>
                </div>
                <a href="./lsd-group2.zip" download>
                    <Button reddish>
                        <span>Tải xuống</span>
                        <DownloadIcon />
                    </Button>
                </a>
            </div>
            <div className={cx('overlay', { active: openMenu })} onClick={handleClickMenu}></div>
        </div>
    );
}

export default NavRight;
