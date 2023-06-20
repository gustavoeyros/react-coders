import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className="fa fa-calendar-check-o" />
        TodoApp
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className="nav-link"
              onClick={() => navigate("/tasks")}
              style={{ cursor: "pointer" }}
            >
              Todo <span className="sr-only" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => navigate("/about")}
              style={{ cursor: "pointer" }}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
