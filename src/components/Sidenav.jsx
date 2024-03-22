import "../cdn/css/sidenav.css";

export default function Sidenav() {

    return (
        <div className="sidenav">
            <ul>
                <li>
                    <a href="/products">Product</a>
                </li>
                <li>
                    <a href="/exemple">Exemple</a>
                </li>
            </ul>
        </div>
    )
}