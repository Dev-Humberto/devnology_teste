import React, {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
import { Link } from '@reach/router';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fornecedor1 from '../components/Fornecedor1';
import Fornecedor2 from '../components/Fornecedor2';
import Users from '../components/users';
import Products from '../components/Products';
import Sales from '../components/Sales';

const AdminPage = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    const userStorage = JSON.parse(localStorage.getItem("USER"));
    useEffect(()=>{
        if(userStorage){
          if(userStorage.type !== 'A'){
            window.location.href = '/';
          }
        } else if(!userStorage) {
            window.location.href = '/';
        }
 
    },[]);

    async function getResponse(){
        const res = await fetch('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider')
                          .then(res=> res.json());
                          setProductData(await res);
    }

    useEffect(()=>{
        getResponse();
    },[]);

    return (
        <Container className="py-4">
            <Row className="justify-content-center" style={{marginTop: '40px'}}>
               
                <Col xs lg="24" style={{color:'white', fontSize: 20, marginTop: '20px'}}>
                    <Tabs
                        defaultActiveKey="Fornecedor1"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="Fornecedor1" title="Fornecedor 1">
                            <Fornecedor1 />
                        </Tab>
                        <Tab eventKey="Fornecedor2" title="Fornecedor 2">
                            <Fornecedor2 />
                        </Tab>
                        <Tab eventKey="Produtos" title="Produtos">
                            <Products />
                        </Tab>
                        <Tab eventKey="Vendas" title="Vendas">
                            <Sales />
                        </Tab>
                        <Tab eventKey="Utilizadores" title="Utilizadores">
                            <Users />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPage;