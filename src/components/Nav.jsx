import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/Sh.Diddou">Sh.D</Link>
      <Link to="/users/Sh.Zakir">Sh.Z</Link>
      <Link to="/users/Musty">M</Link>
    </nav>
  );
}

export default Nav
