import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        backgroundColor: "#646cff",
        padding: "0px 20px",
      }}
    >
      <Link className="navbar-brand" to="/">
        <p style={{ color: "white", fontSize: "1.3rem" }}>StackTracker</p>
      </Link>
    </nav>
  );
}

export default Navbar;
