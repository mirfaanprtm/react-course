import { Button, ButtonGroup, Col } from "react-bootstrap";
import StyledListItem from "./CourseItem.styled";
import { useNavigate } from "react-router-dom";
import Constants from "../../../../components/Constants";
import useMutation from "../../../../hooks/useMutation";
import { deleteCourse } from "../../../../services/courseService";

const CourseItem = (props) => {
  const { title, description, typeId, courseFile, level, duration, id, refetch} = props;

  const {onMutation} = useMutation(deleteCourse, {
    onSuccess : () => refetch()
  })
  const onDelete = () => {
    onMutation(id)
  }



  const navigate = useNavigate();
  return (
    <StyledListItem>
      <Col>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{typeId}</p>
        <p>{courseFile}</p>
        <p>{level}</p>
        <p>{duration}</p>
      </Col>
      <ButtonGroup>
        <Button onClick={() => navigate(`/edit-course/${id}`)} variant="primary">
          Edit
        </Button>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
        <Button variant="secondary">Download</Button>
      </ButtonGroup>
    </StyledListItem>
  );
};

export default CourseItem;
