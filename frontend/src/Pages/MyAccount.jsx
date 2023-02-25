import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Image, Form, Button, Badge } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Heading from  '../components/Heading';
import profilePix from '../images/profile-picture.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet} from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import './my-account.css';
import OrderCard from '../components/OrderCard';

import axiosClient from "../axios-client";

const MyAccount = () => {
    const [theme] = useThemeHook();

    const [ordersDB, setOrdersDb] = useState([]);
    useEffect(()=>{
        axiosClient.get("/compras")
        .then(async (response) => {
            setOrdersDb(response.data.data);
        })

    },[]);

    return (
        <Container className="py-5 mt-5">
           
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className={`${theme? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded h-100 mb-3 user-menu`}>
                        <Row className="mb-3 py-2">
                           <Col xs={3} className="pe-0">
                                <Image
                                    src={profilePix}
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                           </Col> 
                           <Col xs={9} className="pt-1">
                                <h6>Nome do Utilizador</h6>
                           </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-4">
                                <Nav.Link eventKey="my-orders">
                                    Encomendas
                                    <FaClipboardList size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="account-details">
                                    Detalhes conta
                                    <FaUser size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="address">
                                    Endereço
                                    <IoLocationSharp size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="wallet">
                                    Carteira
                                    <GiWallet size="1.4rem" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className={`${theme? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded`}>
                        <Tab.Content>
                            <Tab.Pane eventKey="my-orders">
                                <Heading heading="Encomendas" size="h3" />
                                {ordersDB.map((item, i)=>(
                                    <OrderCard
                                        key={i}
                                        orderDate="Data da encomenda" 
                                        orderId={item.id} 
                                        title="Titulo"
                                        img="imagem"
                                        deliveredDate="Data de entrega"
                                    />
                                 ))}

                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="account-details">
                                <Heading heading="Detalhes da conta" size="h3" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <Heading heading="Endereço" size="h3" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="wallet">
                                <Heading heading="Carteira" size="h3" />
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;