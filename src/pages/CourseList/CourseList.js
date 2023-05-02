import { Button, Container } from "react-bootstrap";
import EmptyList from "../../components/EmptyList/EmptyList";
import { StyledListGroup } from "./CourseList.styled";
import CourseItem from "./components/CourseItem/CourseItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { getCourses } from "../../services/courseService";

const ListItem = (props) => {

  const { data, refetch } = props;
  return (
    <StyledListGroup>
      {data.map((course, index) => {
        return (
          <CourseItem
            title={course.title}
            description={course.description}
            typeId={course.typeId}
            courseFile={course.courseFile}
            level={course.level}
            duration={course.duration}
            id={course.id}
            refetch={refetch}
          />
        );
      })}
    </StyledListGroup>
  );
};

const CourseList = (props) => {
  const {data: courses, loading, error, refetch} = useQuery(getCourses, {})
  const {setLoggedIn} = props;
   
  const navigate = useNavigate()

  const onSubmit = () => {
    setLoggedIn(false)
    alert("Log Out Success")
    navigate("/login")
  }

  return (
    <Container>
      <h1>Course List Page</h1>
      {courses.length > 0 ? (
        <ListItem data={courses} refetch={refetch}/>
      ) : (
        <EmptyList text="Data masih kosong" />
      )}
    <Button onClick={onSubmit}>Log Out</Button>
    </Container>
  );
};

export default CourseList;
