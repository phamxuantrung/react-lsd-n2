import classNames from "classnames/bind";
import styles from "./Tag.module.scss";

const cx = classNames.bind(styles);

function Tag({ done, children }) {
    return <div className={cx("wrapper", { done: done })}>{children}</div>;
}

export default Tag;
