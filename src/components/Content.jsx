import "../cdn/css/content.css"
import Sidenav from "./Sidenav";
import Main from "./Main";

export default function Content() {
    return (
        <div className="content">
            <Sidenav />
            <Main />
        </div>
    )
}