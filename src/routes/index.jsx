import NavTop from "../layouts/NavTop/NavTop";
import NavRight from "../layouts/NavRight/NavRight";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import Content from "../pages/Content/Content";
import Presentation from "../pages/Presentation/Presentation";
import Mindmap from "../pages/Mindmap/Mindmap";
import Essay from "../pages/Essay/Essay";
import Game from "../pages/Game/Game";
import Play from "../pages/Play/Play";

export const publicRoutes = [
    { path: "/", element: Home, layout: NavTop},
    { path: "/team", element: Team, layout: NavRight},
    { path: "/content", element: Content, layout: NavRight},
    { path: "/content/presentation", element: Presentation},
    { path: "/content/mindmap", element: Mindmap, layout: NavRight},
    { path: "/content/essay", element: Essay, layout: NavRight},
    { path: "/game", element: Game, layout: NavRight},
    { path: "/play/:game", element: Play},
];