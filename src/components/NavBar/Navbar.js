import Constants from "../Constants/index";
import { Link } from "react-router-dom";

const MENU = [
  { path: Constants.ROUTES.COURSE_LIST, text: "Course List" },
  { path: Constants.ROUTES.ADD_COURSE, text: "Add Course" },
  { path: Constants.ROUTES.TYPE_LIST, text: "Type List" },
  { path: Constants.ROUTES.LOGIN, text: "Login" },
];

const Navbar = () => {
  return (
    <nav style={{ textAlign: "center" }}>
      {MENU.map((menu) => (
        <Link
          style={{ marginRight: 10 }}
          to={menu.path}
          state={{ title: "from Navbar" }}
        >
          {menu.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
