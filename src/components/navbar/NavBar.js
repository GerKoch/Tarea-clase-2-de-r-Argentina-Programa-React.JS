import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Home
            </Link>
            <ul>
                <CustomLink to="/TaTeTi">Ta Te Ti</CustomLink>
                <CustomLink to="/Memotest">Memotest</CustomLink>
            </ul>
        </nav>
    )
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true }) 

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
};