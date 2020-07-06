
import "./Login.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import React, {useState} from 'react';
import { Redirect } from "react-router-dom";



const Login = (props) => {
  const [userLogin, setUserLogin] = useState("");
  const [Password, setPassword] = useState("");
  const[Newdirect, setNewdirect] = useState(false);

    const myaxios = () => {
    axios({
    method: 'post',
    url: '/api/authentication/login',
    data:{
      username: userLogin,
      password: Password,
    }
  }).then((response)=> {
    if(
      response.status == 200
    )
    {
      setNewdirect(true);
    }
  });

 }

  return !Newdirect ?  (
    <div className = 'login'>
    <div className = 'login-effects'>
      <h1>
        Login
      </h1>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input type="email" name="email" id="exampleEmail" onChange = {(e) => setUserLogin(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" onChange = {(e) => setPassword(e.target.value)}/>
      </FormGroup>
      <Button onClick = {myaxios}>
        Submit
      </Button>
      </Form>
     </div> 
     </div>
  ): (<Redirect to= "/"/>);
 
}

export default Login;