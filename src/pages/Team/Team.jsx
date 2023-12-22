import classNames from "classnames/bind";
import Process from "../../components/Process/Process";
import Tag from "../../components/Tag/Tag";
import styles from "./Team.module.scss";

const cx = classNames.bind(styles);

const members = [
    {
        avatar: "https://zpsocial-f46-org.zadn.vn/9e80985bd81636486f07.jpg",
        fullname: "Dương Việt Anh",
        name: "Việt Anh",
        position: "Leader",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "PowerPoint",
        process: <Process accountfor="100" />,
    },
    {
        avatar: "https://zpsocial-f50-org.zadn.vn/636b52e3b742591c0053.jpg",
        fullname: "Phạm Xuân Trung",
        name: "Xuân Trung",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Thuyết trình",
        process: <Process accountfor="100" />,
    },
    {
        avatar: "https://zpsocial-f52-org.zadn.vn/71d2eaba7a61943fcd70.jpg",
        fullname: "Nguyễn Thị Huyền Trang",
        name: "Thuyết trình",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Thuyết trình",
        process: <Process accountfor="100" />,
    },
    {
        avatar: "https://zpsocial-f50-org.zadn.vn/0b5aa0642edfc08199ce.jpg",
        fullname: "Vũ Hàn Thu Hằng",
        name: "Thu Hằng",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
    {
        avatar: "https://zpsocial-f52-org.zadn.vn/05f0f310c7b029ee70a1.jpg",
        fullname: "Nguyễn Mai Linh",
        name: "Mai Linh",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
    {
        avatar: "https://zpsocial-f45-org.zadn.vn/179320ba2887c4d99d96.jpg",
        fullname: "Nguyễn Thị Hương Ly",
        name: "Hương Ly",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
    {
        avatar: "https://zpsocial-f51-org.zadn.vn/acc83a6035d1db8f82c0.jpg",
        fullname: "Nguyễn Thị Phương Ánh",
        name: "Phương Ánh",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
    ,
    {
        avatar: "https://zpsocial-f44-org.zadn.vn/4440a11b7f369368ca27.jpg",
        fullname: "Nguyễn Trung Quân",
        name: "Trung Quân",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    }
    ,
    {
        avatar: "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang-cho-nu.jpg",
        fullname: "Lê Thị Ngọc Lan",
        name: "Ngọc Lan",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
    ,
    {
        avatar: "https://zpsocial-f53-org.zadn.vn/589cfe95f0241e7a4735.jpg",
        fullname: "Nguyễn Thị Linh Giang",
        name: "Linh Giang",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
    ,
    {
        avatar: "https://zpsocial-f40-org.zadn.vn/c22bead6841c6942300d.jpg",
        fullname: "Nguyễn Phương Thúy",
        name: "Phương Thúy",
        position: "Member",
        status: <Tag done>Hoàn thành</Tag>,
        duty: "Biên soạn nội dung",
        process: <Process accountfor="100" />,
    },
];

// const members = [
//     {
//         avatar: "https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg",
//         fullname: "Phạm Xuân Trung",
//         name: "Xuân Trung",
//         position: "Member",
//         status: <Tag done>Hoàn thành</Tag>,
//         duty: "Thuyết trình",
//         process: <Process accountfor="100" />,
//     },
// ];

function Team() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("team")}>
                <div className={cx("heading")}>Tất cả thành viên</div>
                <div className={cx("title")}>
                    <p>Tên</p>
                    <p>Trang thái</p>
                    <p>Nhiệm vụ</p>
                    <p>Tiến trình</p>
                </div>
                {members.map((member, index) => {
                    return (
                        <div className={cx("member")} key={index}>
                            <div className={cx("infor")}>
                                <img src={member.avatar} alt="" />
                                <div>
                                    <p
                                        className={cx("fullname")}
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "15px",
                                        }}
                                    >
                                        {member.fullname}
                                    </p>
                                    <p
                                        className={cx("name")}
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "15px",
                                        }}
                                    >
                                        {member.name}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "15px",
                                            color: "var(--gray-color)",
                                        }}
                                    >
                                        {member.position}
                                    </p>
                                </div>
                            </div>
                            <div>{member.status}</div>
                            <p>{member.duty}</p>
                            <div>{member.process}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Team;
