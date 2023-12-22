import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import presentation from "../../assets/images/scene-2.svg";
import ppt from "../../assets/images/ppt.png";
import genially from "../../assets/images/genially.png";
import Button from "../../components/Button/Button";

import {
    ArrowPathIcon,
    BookIcon,
    ChangeLogIcon,
    DangerIcon,
    DocIcon,
    ListIcon,
    MegaphoneIcon,
    PresentIcon,
    ShareIcon,
    StartIcon,
    TagIcon,
    TickIcon,
    ViewIcon,
    WarningIcon,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

function Content() {
    const initTime = new Date("2023-04-06");
    const updateTime = new Date("2023-04-10");

    const [boxSlide, setBoxSlide] = useState(false);

    function diffTime(timeCreated) {
        const now = new Date();

        const diffInDays = Math.floor(
            (now - timeCreated) / (1000 * 60 * 60 * 24)
        );
        const diffInWeeks = Math.floor(
            (now - timeCreated) / (1000 * 60 * 60 * 24 * 7)
        );
        const diffInMonths =
            (now.getFullYear() - timeCreated.getFullYear()) * 12 +
            (now.getMonth() - timeCreated.getMonth());

        if (diffInDays < 7) return `${diffInDays} ngày trước`;
        else if (diffInDays >= 7 && diffInDays < 30)
            return `${diffInWeeks} tuần trước`;
        else if (diffInDays >= 30) return `${diffInMonths} tháng trước`;
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("choose-slide", { show: boxSlide })}>
                <div className={cx("box")}>
                    <section>
                        <p>Attribution required</p>
                        <button
                            onClick={() => {
                                setBoxSlide(false);
                            }}
                        >
                            ✖
                        </button>
                    </section>
                    <div
                        onClick={() => {
                            window.open("/content/presentation");
                            setBoxSlide(false);
                        }}
                    >
                        <img src={genially} alt="" />
                        <span>Genially (Recommendations)</span>
                    </div>
                    <div onClick={() => {
                        alert("PowerPoint chưa được thêm vào!")
                    }}>
                        <img src={ppt} alt="" />
                        <span>Office PowerPoint 365</span>
                    </div>
                </div>
            </div>

            {/* main content */}
            <div className={cx("short-infor")}>
                <div>
                    <Link to="/content/mindmap" className={cx("mindmap")}>
                        <span>New</span>
                        <div>Xem sơ đồ hệ thống kiến thức</div>
                        <StartIcon className={cx("icon")} />
                    </Link>
                    <div className={cx("heading")}>
                        Từ quá trình Đảng lãnh đạo xây dựng nền KTTT định hướng
                        XHCN, hãy làm rõ kết quả thực hiện trên các mặt sau:
                    </div>
                    <div className={cx("des")}>
                        Hoàn thiện nhận thức về KTTT, Hoàn thiện thể chế KTTT,
                        Hoàn thiện các thành phần kinh tế, Hội nhập kinh tế quốc
                        tế?
                    </div>
                    <div className={cx("reviews")}>Hoàn thành ✅</div>
                    <div
                        onClick={() => {
                            setBoxSlide(true);
                        }}
                        style={{ display: "inline-block" }}
                    >
                        <Button>
                            <span>Chiếu slide</span>
                            <PresentIcon />
                        </Button>
                    </div>
                    <Link to="/content/essay">
                        <Button reddish>
                            <span>Tiểu luận</span>
                            <BookIcon />
                        </Button>
                    </Link>
                </div>
                <img className={cx("img")} src={presentation} alt="" />
            </div>
            <div className={cx("detail")}>
                <div className={cx("nav-tabs")}>
                    <a href="#overview">
                        <div className={cx("nav-item")}>
                            <DocIcon />
                            <span>Tổng quan</span>
                        </div>
                    </a>
                    <a href="#review">
                        <div className={cx("nav-item")}>
                            <ViewIcon />
                            <span>Đánh giá</span>
                        </div>
                    </a>
                    <a href="#changelog">
                        <div className={cx("nav-item")}>
                            <ChangeLogIcon />
                            <span>Nhật ký</span>
                        </div>
                    </a>
                </div>
                <div id="overview" className={cx("overview")}>
                    <div>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec non dolor ut nunc pretium dictum. Sed
                            eleifend risus quis lorem porta sollicitudin. Aenean
                            posuere enim et magna mollis, sit amet eleifend
                            lectus suscipit. Nam et gravida eros, ac dictum
                            turpis. Vivamus eget nulla mollis, porta sem
                            molestie, aliquet urna. Nam pulvinar sapien in urna
                            sollicitudin, a bibendum felis viverra. Pellentesque
                            eget lacus turpis.
                        </p>
                        <p>
                            Aliquam odio dolor, blandit at fringilla vitae,
                            viverra non tellus. Nullam semper gravida sem eget
                            imperdiet. Aliquam lacinia id nunc porta pretium.
                            Aliquam tristique facilisis feugiat. Cras volutpat
                            elementum commodo. Vestibulum hendrerit pretium
                            sagittis. Mauris sed erat ut sapien iaculis gravida
                            quis ac dolor. Ut placerat mauris sed aliquet
                            sollicitudin. Nunc ac enim a risus pellentesque
                            pharetra in eu eros. Aliquam erat volutpat. Integer
                            nibh tortor, volutpat ac molestie vel, vulputate id
                            dolor. Proin lacinia nibh tincidunt hendrerit
                            aliquet. Pellentesque tincidunt ut mauris sit amet
                            vulputate. Cras rhoncus, nunc id facilisis
                            tincidunt, massa mauris blandit velit, vitae
                            elementum felis arcu id purus. Morbi fringilla ex
                            sit amet nulla facilisis, ut feugiat massa faucibus.
                        </p>
                        <p>
                            Etiam lorem nibh, ultrices vitae vestibulum varius,
                            egestas id neque. Phasellus eu rhoncus purus. Mauris
                            non sem vitae purus venenatis tincidunt. Donec
                            ligula mi, vulputate eu ipsum eu, feugiat semper
                            tortor. Integer quam elit, pulvinar at consectetur
                            eget, efficitur nec lorem. Nullam hendrerit dolor
                            sit amet ipsum venenatis vulputate. Vivamus sem
                            diam, varius nec sodales vel, dapibus sed quam.
                            Phasellus porta elit purus. Ut nec felis sodales,
                            malesuada turpis suscipit, facilisis leo. Nullam
                            dictum mauris non lectus efficitur vestibulum.
                            Nullam tristique dapibus malesuada. Etiam felis
                            nisl, commodo eu fermentum vel, semper eget sapien.
                            Nam ullamcorper leo justo, vitae porttitor justo
                            rutrum sit amet. In hac habitasse platea dictumst.
                        </p>
                        <p>
                            Nunc sapien quam, commodo fringilla porta eu,
                            vehicula id enim. Mauris dapibus malesuada suscipit.
                            Ut vitae mollis nisl. Phasellus imperdiet sem id
                            risus maximus, et vulputate ligula volutpat.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Donec
                            nibh nibh, volutpat eu tincidunt a, luctus eu massa.
                            Cras congue erat tortor, a euismod sapien mollis in.
                            In semper tristique purus in condimentum. Sed
                            bibendum nisi eget elit dapibus, a semper tortor
                            faucibus. Nullam ut porttitor nunc, vel consequat
                            neque. Integer tincidunt quis erat eget consequat.
                        </p>
                        <p>
                            Donec feugiat diam id posuere suscipit. Sed
                            consectetur augue nec felis lobortis, a eleifend
                            erat sagittis. Donec accumsan vel est id mattis. Nam
                            est lorem, molestie nec euismod ac, sodales at
                            ligula. Nulla sodales eu lectus ac luctus. Donec
                            rutrum arcu a elit volutpat eleifend. Pellentesque
                            nulla sem, consectetur a neque vel, tempus vulputate
                            felis. Nullam suscipit finibus ipsum, nec vulputate
                            nisi suscipit sit amet. Praesent convallis tempus
                            nulla vel elementum. Donec finibus dolor sapien, in
                            pharetra ipsum tincidunt sit amet. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                            Donec bibendum felis vitae tincidunt vestibulum.
                        </p>
                        <p>...</p>
                    </div>
                    <div className={cx("card")}>
                        <div className={cx("card-item")}>
                            <MegaphoneIcon />
                            <span>Phát hành: {diffTime(initTime)}</span>
                        </div>
                        <div className={cx("card-item")}>
                            <ArrowPathIcon />
                            <span>Cập nhật: {diffTime(updateTime)} </span>
                        </div>
                        <div className={cx("card-item")}>
                            <ShareIcon />
                            <span>Phiên bản: 1.1.0</span>
                        </div>
                        <div className={cx("card-item")}>
                            <ListIcon />
                            <span>Thể loại: Lịch sử</span>
                        </div>
                        <ul>
                            <li>
                                <TickIcon className={cx("tick-icon")} />
                                <span>Kiến thức trọng tâm</span>
                            </li>
                            <li>
                                <WarningIcon className={cx("warning-icon")} />
                                <span>Kiến thức sâu, mở rộng</span>
                            </li>
                            <li>
                                <TickIcon className={cx("tick-icon")} />
                                <span>Liên hệ thực tế</span>
                            </li>
                            <li>
                                <TickIcon className={cx("tick-icon")} />
                                <span>Hình ảnh minh họa</span>
                            </li>
                            <li>
                                <TickIcon className={cx("tick-icon")} />
                                <span>Videos minh họa</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="review" className={cx("review")}>
                    <div>
                        <h2>Đánh giá</h2>
                        <p>Không có đánh giá nào</p>
                    </div>
                    <div className={cx("text-submit")}>
                        <h2>Thêm đánh giá</h2>
                        <textarea></textarea>
                        <div
                            style={{
                                marginTop: 16,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <p>250 ký tự được nhập</p>
                            <Button>Gửi đánh giá</Button>
                        </div>
                    </div>
                </div>
                <div id="changelog" className={cx("changelog")}>
                    <h2>Nhật ký</h2>
                    <p>
                        Chúng tôi tin rằng việc cung cấp các bản cập nhật có ý
                        nghĩa vô cùng quan trọng. Mọi bản cập nhật của chúng tôi
                        đều hướng đến trải nhiệm và kiến thức truyền tải tới mọi
                        người. Chúng tôi luôn lắng nghe ý kiến và tìm ra những
                        giải pháp tốt nhất để cung ứng một cách hiệu quả.
                    </p>
                    <p>
                        Dưới đây, bạn có thể xem dòng thời gian thay đổi dành kể
                        từ lần ra mắt đầu tiên {diffTime(initTime)}.
                    </p>
                    <div className={cx("tag")}>
                        <TagIcon className={cx("tag-icon")} />
                        <span>v1.1.0</span>
                        <p> - {updateTime.toDateString()}</p>
                        <div className={cx("status")}>Mới nhất</div>
                    </div>
                    <div className={cx("tag")}>
                        <TagIcon className={cx("tag-icon")} />
                        <span>v1.0.0</span>
                        <p> - {initTime.toDateString()}</p>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                ©2023 Bảo lưu mọi quyền. TrungPham™ là người sáng lập trang web
            </div>
        </div>
    );
}

export default Content;
