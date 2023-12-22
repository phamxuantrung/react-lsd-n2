import classNames from "classnames/bind";
import styles from "./Mindmap.module.scss";

import loading from "../../assets/images/loading.gif";

const cx = classNames.bind(styles);

function Mindmap() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return (<div className={cx('error')}>Xin lỗi, mindmap không thể hiển thị trên thiết bị di động.</div>)
    }

    else return (
        <div className={cx('mindmap')}>
            <div className={cx('fake-load')}>
                <img src={loading} alt="loading" />
            </div>
            <iframe className={cx('ifr')} src="https://www.mindmeister.com/maps/public_map_shell/2684699184/my-new-mind-map?width=600&height=400&z=auto&no_share=1&no_logo=1"
            ></iframe>
        </div>
    );
}

export default Mindmap;
