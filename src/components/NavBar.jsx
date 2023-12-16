import { NavLink } from "react-router-dom"


const activeMenu = ({isActive}) => isActive ? "active-navlink" : ""

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink className={activeMenu} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={activeMenu} to="/about">About us</NavLink>
            </li>
            <li>
                <NavLink className={activeMenu} to="/posts">Posts</NavLink>
            </li>
            <li>
                <NavLink className={activeMenu} to="/postPush">PostsPush</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar