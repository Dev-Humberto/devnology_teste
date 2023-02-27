import React,{ useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Link, useNavigate } from "@reach/router";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';

import axiosClient from "../axios-client";
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);
    const [theme] = useThemeHook();
    
    const navigate = useNavigate();
    
    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const name = form.firstName.value;
        const password = form.password.value;
        const email = form.email.value;
        const password_confirmation= form.passwordConfirmationRef.value;
        const username = form.username.value;
        const phonenumber = number;
        const address = form.address.value;
        const type = 'C';//form.email.type;


        if(name && password && email && phonenumber){
            setLoading(true);
            /*console.log('call api here');
            console.log(username, password, firstname, lastname, email, number);*/
            
            axiosClient.post("/signup", {name, password, email, password_confirmation, username, phonenumber, address, type})
            .then((response) => {
                console.log(response.data)
                //setLoading(false);
                if (response.data.status === 200) {
                    //setUser(response.data.user);
                    //setToken(response.data.token);
                    localStorage.setItem('USER',JSON.stringify({id: response.data.user.id, name:response.data.user.name, email:response.data.user.email, type:response.data.user.type}));
                    localStorage.setItem("ACCESS_TOKEN", response.data.token);
                    //window.location.href = '/';
                    navigate('/', {replace: true})
                }

                if (response.data.status === "failed") {
                    console.log('Failed');
                }

            })

        }
    }
    return (
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Criar conta
                    </h1>
                    <Form onSubmit={handleSubmit}>
                       
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name="firstName" type="text" placeholder="Nome" required />
                        </Form.Group>
                           
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome de utilizador</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Nome de utilizador" minLength={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefone</Form.Label>
                            <PhoneInput
                                country={'cv'}
                                value={number}
                                onChange={phone=> setNumber(phone)}
                                className="text-dark"
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control name="address" type="text" placeholder="Endereço" minLength={3} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Palavra-passe</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Palavra-passe" minLength={6} required />
                        </Form.Group> 

                        <Form.Group className="mb-3">
                            <Form.Label>Confirmar Palavra-passe</Form.Label>
                            <Form.Control name="passwordConfirmationRef" type="password" placeholder="Confirmar Palavra-passe" required />
                        </Form.Group> 

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
                                &nbsp;Loading...
                            </> : 'Continue'
                        }
                        </Button>

                        <Form.Group className="mt-3 text-center">
                            <Form.Text className="text-muted fw-bold">
                                Já tem uma conta
                            </Form.Text>
                            <Row className="py-2 border-bottom mb-3"/>
                            <Link to='/sign-in' className="btn btn-info rounded-0">
                               Login
                            </Link>
                        </Form.Group>


                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default Register;