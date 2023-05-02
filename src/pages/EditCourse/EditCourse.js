import React from "react";
import FormInput from "../../components/FormInput";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import useEditCourse from "./useEditCourse";
import { StyledContainer, StyledTitle } from "./EditCourse.styled";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Constants from "../../components/Constants";
import useMutation from "../../hooks/useMutation";
import { editCourse } from "../../services/courseService";

const { ROUTES } = Constants;

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

const EditCourse = (props) => {
  const { getter, setter } = useEditCourse();
//   const location = useLocation();
    let {id} = useParams();
  //   const { editCourse } = props;
  const navigate = useNavigate();

  const { onMutation, loading } = useMutation(editCourse, {
    onSuccess: () => navigate("/course-list"),
    onError: () => {},
  });

  const onSubmit = () => {
    onMutation({...getter, id});
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const newCourse = {
  //       title: setter.title,
  //       description: setter.description,
  //       typeId: setter.typeId,
  //       courseFile: setter.courseFile,
  //       level: setter.level,
  //       duration: setter.duration,
  //     };
  //     if (
  //       !getter.title ||
  //       !getter.description ||
  //       !getter.typeId ||
  //       !getter.courseFile ||
  //       !getter.level ||
  //       !getter.duration
  //     ) {
  //       alert("Field Is Still Empty");
  //     } else {
  //       editCourse(newCourse);
  //       navigate("/course-list");
  //     }
  //   };

  return (
    <StyledContainer color={"green"}>
      <StyledTitle>Edit Course Page</StyledTitle>
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
          <Button
            disabled={loading}
            variant="success"
            formNoValidate
            onClick={onSubmit}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </StyledContainer>
  );
};

export default EditCourse;
