import classNames from "classnames/bind";
import styles from "./Process.module.scss";

const cx = classNames.bind(styles);

function Process({accountfor}) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("process")}>
                <div className={cx(`accountfor${accountfor}`)}></div>
            </div>
            <p>{`${accountfor}%`}</p>
        </div>
    );
}

export default Process;
