import "./App.css";
import AddCourse from "./pages/AddCourse/AddCourse";
import CourseList from "./pages/CourseList/CourseList";
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes, Outlet, Navigate, useParams } from "react-router-dom";
import Constants from "./components/Constants/index";
import Login from "./pages/Login/Login";
import LoginForm from "./pages/Login/Login";
import CourseItem from "./pages/CourseList/components/CourseItem/CourseItem";
import EditCourse from "./pages/EditCourse/EditCourse";

const DATA = [];
const { ROUTES } = Constants;

const ProtectedRoute = (props) => {
  const { isLoggedIn } = props;
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  // const [screenName, setScreenName] = React.useState("");
  const [courseList, setCourseList] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const addCourse = (newCourse) => {
    setCourseList([...courseList, newCourse]);
  };
  const editCourse = (newCourse) => {
    setCourseList([...courseList, newCourse]);
  };

  // let ScreenComponent;
  // let props;

  // switch (screenName) {
  //   case "course-list":
  //     ScreenComponent = CourseList;
  //     props = {
  //       courses: courseList,
  //     };
  //     break;
  //   case "add-course":
  //     ScreenComponent = AddCourse;
  //     break;
  //   default:
  //     ScreenComponent = CourseList;
  //     props = {
  //       courses: DATA,
  //     };
  //     break;
  // }

  // const onNavigate = (screenName) => {
  //   setScreenName(screenName);
  // };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          element={<LoginForm setLoggedIn={setLoggedIn} />}
          path={ROUTES.LOGIN}
        />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route element={<EditCourse editCourse={editCourse}/>} path={'/edit-course/:id'}/>
          <Route
            element={
              <CourseList courses={courseList} setLoggedIn={setLoggedIn} />
            }
            path={ROUTES.COURSE_LIST}
          />
          <Route
            element={<AddCourse addCourse={addCourse} />}
            path={ROUTES.ADD_COURSE}
          />
        </Route>
        <Route path="*" element={<h3>Page is not found</h3>} />
      </Routes>
    </>
  );
}

export default App;
