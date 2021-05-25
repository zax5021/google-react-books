import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <Link className="navbar-brand h1" to="/">
          React Google Books
        </Link>
        <NavLink
          className="btn btn-outline-primary mr-4"
          exact
          to="/"
          type="button"
        >
          Search Books
          {pathname === "/" && <span className="sr-only">(current)</span>}
        </NavLink>
        <NavLink
          className="btn btn-outline-secondary "
          to="/saved"
          type="button"
        >
          Saved Books
          {pathname === "/" && <span className="sr-only">(current)</span>}
        </NavLink>
      </form>
    </nav>
  );
}

export default Navbar;
