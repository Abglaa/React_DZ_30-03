import { Outlet } from "react-router-dom"

import NavBar from "./NavBar"

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <footer>
            <span>left until the new year 15-day</span>
        </footer>
    </div>
  )
}

export default Layout