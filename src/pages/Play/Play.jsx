import classNames from "classnames/bind";
import { useState } from "react";
import { CodeIcon } from "../../assets/icons";
import styles from "./Play.module.scss";

import correctSound from "../../assets/sounds/correct.mp3";
import failSound from "../../assets/sounds/fail.mp3";
import luckySound from "../../assets/sounds/lucky.mp3";
import unluckySound from "../../assets/sounds/unlucky.mp3";
import doneSound from "../../assets/sounds/done.mp3";
import luckyGif from "../../assets/images/lucky.gif";
import unluckyGif from "../../assets/images/unlucky.gif";
import doneGif from "../../assets/images/done.gif";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const key = "1234";
const questions = [
    {
        box: "normal",
        quiz: "Nội dung nào sau đây mô tả đúng nhất thành tựu lãnh đạo của Đảng trong việc xây dựng hệ thống kinh tế định hướng xã hội chủ nghĩa về nâng cao dân trí trong phát triển kinh tế và hoàn thiện thể chế kinh tế trong nền kinh tế hoàn thiện của nước ta?",
        ans: [
            "A: Đảng đã có những bước phát triển vượt bậc trên cả hai mặt, đẩy mạnh đổi mới, tối ưu hóa thể chế kinh tế để thúc đẩy tăng trưởng kinh tế bền vững, chất lượng cao.",
            "B: Đảng đã đạt được thành công vừa phải, với một số cải thiện về năng lực trí tuệ và khuôn khổ thể chế, nhưng phải đối mặt với những thách thức như thiếu đổi mới và nhu cầu cải cách hơn nữa.",
            "C: Những nỗ lực của Đảng đạt được thành công hạn chế trong các lĩnh vực này, ít cải thiện đáng kể về trí tuệ và thể chế, cản trở sự tăng trưởng của nền kinh tế.",
            "D: Sự lãnh đạo của Đảng chưa nâng cao được trí tuệ và thể chế trong phát triển kinh tế, dẫn đến tăng trưởng chậm và chuyển dịch cơ cấu nền kinh tế chưa tương xứng.",
        ],
        corI: 0,
    },
    {
        box: "normal",
        quiz: "Việt Nam là thành viên thứ mấy của WTO?",
        ans: ["A: 150", "B: 151", "C: 152", "D: 153"],
        corI: 0,
    },
    {
        box: "normal",
        quiz: "Vấn đề nào được xem là nội dung hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam?",
        ans: ["A: Hoàn thiện thể chế để phát triển đồng bộ các yếu tố thị trường và các loại thị trường.", "B: Hoàn thiện thể chế về sở hữu và phát triển các thành phần kinh tế.", "C: Hoàn thiện thể chế để đảm bảo gắn tăng trưởng kinh tế với bảo đảm tiến bộ và công bằng xã hội.", "D: Tất cả đáp án trên đều đúng."],
        corI: 3,
    },
    {
        box: "normal",
        quiz: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, để đạt được hệ giá trị toàn diện gồm cả dân giàu, nước mạnh, xã hội dân chủ, công bằng, văn minh thì cần yếu tố nào?",
        ans: ["A: Trong xã hội không còn mâu thuẫn giữa các tầng lớp dân cư.", "B: Sự hợp tác và hỗ trợ từ các nước trong hệ thống Chủ nghĩa xã hội.", "C: Vai trò điều tiết của nhà nước dưới sự lãnh đạo của Đảng cộng sản.", "D: Ngân sách Nhà Nước phải đủ mạnh để thực hiện các chính sách phúc lợi."],
        corI: 2,
    },
    {
        box: "normal",
        quiz: "Thành phần kinh tế nhà nước giữ vai trò gì trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta?",
        ans: ["A: Giữ vai trò quan trọng.", "B: Giữ vai trò chủ đạo.", "C: Giữ vai trò xúc tác.", "D: Giữ vai trò thống trị."],
        corI: 1,
    },
    {
        box: "lucky",
    },
    {
        box: "lucky",
    },
    {
        box: "unlucky",
    },
    {
        box: "unlucky",
    },
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffle(questions);

function Play() {
    const [success, setSuccess] = useState(false);
    const [answered, setAnswered] = useState([]);
    const [currentQues, setCurrentQues] = useState(null);
    const [checked, setChecked] = useState(false);

    function handleClickPass() {
        let val = document.getElementById("input")?.value.toLowerCase();
        if (val !== key) {
            document.getElementById("input").style.borderColor = "#dc3545";
            document.getElementById("input").style.background =
                "rgba(220, 53, 70, 0.3)";
            document.querySelector("span").style.borderColor = "#dc3545";
            document.querySelector("span").style.background =
                "rgba(220, 53, 70, 0.3)";
            return;
        }
        if (window.location.href.includes("pick-lucky")) setSuccess(true);
    }

    function handleKeyDown(e) {
        if (e.which === 13) handleClickPass();
    }

    function handleClickItemGame(ques, index) {
        let ans = [...answered];
        if (!ans.includes(index)) ans.push(index);
        setAnswered(ans);
        setCurrentQues(ques);
        setChecked(false);
        if (ques.box === "lucky") document.getElementById("lucky-sound").play();
        if (ques.box === "unlucky")
            document.getElementById("unlucky-sound").play();
    }

    function handleChooseAns(currentQues, index, element) {
        if (checked) return;
        setChecked(true);
        element.classList.add(`${cx("choose-current")}`);
        if (currentQues.corI === index) {
            document.getElementById("correct-sound").play();
        } else {
            document.getElementById("fail-sound").play();
        }
    }

    document.title = "Trò chơi";

    return (
        <div className={cx("wrapper")}>
            {success ? (
                <div className={cx("game")}>
                    {questions.map((ques, index) => {
                        if (!answered.includes(index))
                            return (
                                <div
                                    className={cx(
                                        "item",
                                        { bg1: index % 2 === 0 },
                                        { bg2: index % 2 === 1 }
                                    )}
                                    key={index}
                                    onClick={() =>
                                        handleClickItemGame(ques, index)
                                    }
                                >
                                    {index + 1}
                                </div>
                            );
                        else
                            return (
                                <div
                                    className={cx("item-answered")}
                                    key={index}
                                    onClick={() =>
                                        handleClickItemGame(ques, index)
                                    }
                                >
                                    {index + 1}
                                </div>
                            );
                    })}
                    {currentQues && (
                        <div className={cx("current-ques")}>
                            <div className={cx("panel")}>
                                <div style={{ position: "relative" }}>
                                    {currentQues.box === "normal" && (
                                        <div className={cx("heading")}>
                                            Câu hỏi
                                        </div>
                                    )}
                                    {currentQues.box === "lucky" && (
                                        <div className={cx("heading")}>
                                            Ô may mắn
                                        </div>
                                    )}
                                    {currentQues.box === "unlucky" && (
                                        <div className={cx("heading")}>
                                            Mất lượt rồi 😞
                                        </div>
                                    )}
                                    <div
                                        className={cx("close")}
                                        onClick={() => {
                                            setCurrentQues(null);
                                            if (
                                                answered.length ===
                                                questions.length
                                            )
                                                document
                                                    .getElementById(
                                                        "done-sound"
                                                    )
                                                    .play();
                                        }}
                                    >
                                        ×
                                    </div>
                                </div>
                                <div className={cx("body")}>
                                    {currentQues.box === "normal" && (
                                        <div
                                            style={{
                                                padding:
                                                    "1vmin 1vmin 1.5vmin 1vmin",
                                                backgroundColor: "#f8f4fb",
                                                borderRadius: "0 0 1vmin 1vmin",
                                            }}
                                        >
                                            <div className={cx("quiz")}>
                                                {currentQues.quiz}
                                            </div>
                                            <div
                                                className={cx("answer", {
                                                    checked: checked,
                                                })}
                                            >
                                                {currentQues.ans.map(
                                                    (ans, index) => {
                                                        let bg = "#fff";
                                                        if (
                                                            checked &&
                                                            currentQues.corI ===
                                                                index
                                                        )
                                                            bg = "#2ebe4e";
                                                        if (
                                                            checked &&
                                                            currentQues.corI !==
                                                                index
                                                        )
                                                            bg = "#fb3d5f";
                                                        return (
                                                            <div
                                                                key={index}
                                                                style={{
                                                                    background: `${bg}`,
                                                                }}
                                                                onClick={(e) =>
                                                                    handleChooseAns(
                                                                        currentQues,
                                                                        index,
                                                                        e.target
                                                                    )
                                                                }
                                                            >
                                                                {ans}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {currentQues.box === "lucky" && (
                                        <div className={cx("lucky-number")}>
                                            <img src={luckyGif} alt="" />
                                        </div>
                                    )}

                                    {currentQues.box === "unlucky" && (
                                        <div className={cx("unlucky-number")}>
                                            <img src={unluckyGif} alt="" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={cx("overlay")}
                                onClick={() => {
                                    setCurrentQues(null);
                                }}
                            ></div>
                        </div>
                    )}
                    {answered.length === questions.length &&
                        currentQues === null && (
                            <div className={cx("done")}>
                                <img src={doneGif} alt="" />
                                <Link to={"/game"}>
                                    <div>Quay về ➜</div>
                                </Link>
                            </div>
                        )}
                </div>
            ) : (
                <div className={cx("password")}>
                    <div className={cx("box")}>
                        <h1>Nhập mật khẩu</h1>
                        <div style={{ display: "flex" }}>
                            <span>
                                <CodeIcon className={cx("icon")} />
                            </span>
                            <input
                                placeholder="Nhập mật khẩu ở đây"
                                id="input"
                                type="password"
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className={cx("btn")} onClick={handleClickPass}>
                            Xong
                        </div>
                    </div>
                </div>
            )}
            <audio id="correct-sound" src={correctSound}></audio>
            <audio id="fail-sound" src={failSound}></audio>
            <audio id="lucky-sound" src={luckySound}></audio>
            <audio id="unlucky-sound" src={unluckySound}></audio>
            <audio id="done-sound" src={doneSound}></audio>
        </div>
    );
}

export default Play;
