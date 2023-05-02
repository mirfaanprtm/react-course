import React from "react";
import FormInput from "../../components/FormInput";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import useAddCourse from "./useAddCourse";
import { StyledContainer, StyledTitle } from "./AddCourse.styled";
import { Navigate, useNavigate } from "react-router-dom";
import Constants from "../../components/Constants";
import useMutation from "../../hooks/useMutation";
import { addCourse } from "../../services/courseService";
const { ROUTES } = Constants

const FORM_LIST = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter course description",
  },
  {
    id: "typeId",
    label: "Type Id",
    type: "text",
    placeholder: "Enter course type id",
  },
  {
    id: "courseFile",
    label: "Course Material",
    type: "file",
    placeholder: "Choose course material",
  },
  {
    id: "level",
    label: "Level",
    type: "text",
    placeholder: "Enter course level",
  },
  {
    id: "duration",
    label: "Duration",
    type: "text",
    placeholder: "Enter course duration",
  },
];

const AddCourse = () => {
  const navigate = useNavigate()
  const { getter, setter } = useAddCourse();
  const {onMutation, loading} = useMutation(addCourse, {
    onSuccess: () => navigate("/course-list"),
    onError: () => {}
  })

  const onSubmit = (event) => {
    event.preventDefault()
    onMutation(getter)
  }


  // const handleSubmit = (event, data) => {
  //   event.preventDefault();
  //   const newCourse = {
  //     title: getter.title,
  //     description: getter.description,
  //     typeId: getter.typeId,
  //     courseFile: getter.courseFile,
  //     level: getter.level,
  //     duration: getter.duration,
  //   };
  //   if (
  //     !getter.title ||
  //     !getter.description ||
  //     !getter.typeId ||
  //     !getter.courseFile ||
  //     !getter.level ||
  //     !getter.duration
  //   ) {
  //     alert("Field Is Still Empty");
  //   } else {
  //     onMutation(data);
  //     navigate("/course-list")
  //   }
  // };

  return (
    <StyledContainer color={"green"}>
      <StyledTitle>Add Course Page</StyledTitle>
      <Form>
        {FORM_LIST.map((form) => (
          <FormInput
            required
            label={form.label}
            type={form.type}
            placeholder={form.placeholder}
            value={getter[form.id]}
            onChange={setter[form.id]}
          />
        ))}
        <ButtonGroup>
          <Button disabled={loading} variant="success" formNoValidate onClick={onSubmit} >
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </StyledContainer>
  );
};

export default AddCourse;
