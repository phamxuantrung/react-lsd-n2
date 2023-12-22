import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({ children, reddish, fullWidth }) {
    return <div className={cx("wrapper", {reddish: reddish, fullWidth: fullWidth})}>{children}</div>;
}

export default Button;
