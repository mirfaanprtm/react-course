import { Form, Button, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from "react";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {setLoggedIn} = props

  const navigate = useNavigate();

  const onSubmit = (data) => {

    const emailValid = "email@gmail.com"
    const passValid = "123456"
    if(emailValid == data.email && passValid == data.password){
        setLoggedIn(true)
        console.log(data);
        navigate("/course-list")
    } else{
        alert("Email or Password Wrong")
    }
  };

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <FormLabel>Email</FormLabel>
        <Form.Control
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>This field is required</span>}
      </Form.Group>
      <br />
      <Form.Group>
        <FormLabel>Password</FormLabel>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>This field is required</span>}
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
