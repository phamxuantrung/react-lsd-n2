import classNames from "classnames/bind";
import { useState } from "react";
import { DownloadIcon2, ZoominIcon, ZoomoutIcon } from "../../assets/icons";
import styles from "./Essay.module.scss";

const cx = classNames.bind(styles);
const pageSrcs = [
  require("../../assets/images/essay/sample.png"),
  require("../../assets/images/essay/2.png"),
  require("../../assets/images/essay/2.png"),
];

function Essay() {
  const [zoom, setZoom] = useState(1.0);

  return (
    <div id="essay" className={cx("wrapper")}>
      <div
        style={{ maxWidth: 600 }}
      >
        {pageSrcs.map((pageSrc, index) => {
          return (
            <div key={index} className={cx("page")}>
              <img
                style={{ width: `${zoom * 100}%` }}
                src={pageSrc}
                alt=""
              />
            </div>
          );
        })}
          <section className={cx("taskbar")}>
            <div>
              <div
                className={cx('item')}
                onClick={() => {
                  setZoom(zoom + 0.1);
                }}
              >
                <ZoominIcon className={cx("zoomin")} />
              </div>
              <div
                className={cx('item')}
                onClick={() => {
                  setZoom(zoom - 0.1);
                }}
              >
                <ZoomoutIcon className={cx("zoomout")} />
              </div>
            </div>
            <div className={cx("btn-download")}>
              <span>Tải xuống</span>
              <DownloadIcon2 />
            </div>
          </section>
      </div>
      <div style={{height: 50}}></div>
    </div>
  );
}

export default Essay;
