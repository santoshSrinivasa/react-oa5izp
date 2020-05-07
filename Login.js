import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Login extends React.Component {
            render() {
                      return (<div>
                                   <Jumbotron>
                                   <h2 style={{padding:"10px"}}>React Demo</h2>
                                   </Jumbotron>
                                   <Form style={{padding:"10px"}}>
                                   <h2>Login</h2><br/>
                                   <Form.Group>
                                   <Form.Control type="text" style={{width:"30%"}}
                                                placeholder="Enter Name"
                                                />
                                   </Form.Group><br/>
                                   <Form.Group>
                                   <Form.Control type="password" style={{width:"30%"}}
                                                placeholder="Enter Password"
                                                /><br/><br/>
                                   </Form.Group>
                                   <Form.Group >
                                     <Form.Check type="checkbox" label="Remember me" />
                                   </Form.Group>
                                   <Button type="submit" variant="primary" size="sm" > Login 
                                   </Button>
                                   </Form>
                             </div>);
                   }
}
export default Login;
