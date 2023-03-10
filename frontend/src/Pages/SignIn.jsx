import React,{ useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Link, useNavigate } from "@reach/router";

//icons
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

import axiosClient from "../axios-client";

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        if(email && password){
           
            axiosClient.post('login',{email, password}).then((response) => {
                if(response.status === 200){
                    localStorage.setItem('USER',JSON.stringify({id: response.data.user.id, name:response.data.user.name, email:response.data.user.email, type:response.data.user.type}));
                    localStorage.setItem("ACCESS_TOKEN", response.data.token);
                    //navigate('/', {replace: true})
                    //alert('Login successfully');
                    window.location.href = '/';
                }else{
                    console.log("Erro=>", response);
                }
                
            });

        }
    }
    return (
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Login
                    </h1>
                    
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-4 mt-5">
                            <InputGroup.Text>
                                <AiOutlineUser size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="email" type="email" placeholder="Email" required />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Text>
                                <VscKey size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="password" type="password" placeholder="Palavra-passe" minLength={8} required />
                        </InputGroup>
                        <Button
                            type="submit"
                            className={`${theme? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
                        >
                        {loading? 
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;Carregando...
                            </> : 'Login'
                        }
                        </Button>
                        <Form.Group className="mt-3 text-center">
                            <Form.Text className="text-muted fw-bold">
                                N??o tem uma conta?
                            </Form.Text>
                            <Row className="py-2 border-bottom mb-3"/>
                            <Link to='/register' className="btn btn-info rounded-0">
                                Cria uma conta
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default SignIn;