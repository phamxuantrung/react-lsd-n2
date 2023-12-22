import THeader from "../../parts/THeader/THeader";
import classNames from "classnames/bind";
import styles from "./NavTop.module.scss";
const cx = classNames.bind(styles);

function NavTop({ children }) {
    return (
        <div className={cx("wrapper")}>
            <THeader />
            <div className={cx("page")}>{children}</div>
        </div>
    );
}

export default NavTop;
