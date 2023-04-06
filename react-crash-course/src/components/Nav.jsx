import { Link } from "react-router-dom";
import Users from "../pages/Users";

function Nav () {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users/ronaldo">Ronaldo</Link>
          <Link to="/users/messi">Messi</Link>
          <Link to="/users/Lunga">Lunga</Link>
        </nav>
    );
}

export default Nav
