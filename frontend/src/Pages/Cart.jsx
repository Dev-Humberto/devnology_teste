import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import axiosClient from "../axios-client";
import { Navigate } from 'react-router-dom';

const Cart = () => {
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const userStorage = JSON.parse(localStorage.getItem("USER"));
    const tokenStorage = localStorage.getItem("ACCESS_TOKEN");
    const [desableBtn, setDisableDtn] = useState('disabled');
    const [desableBtnMgs, setDisableDtnMsg] = useState('Faça login');
    const [user_id, setUserId] = useState(null);
    const buyItem = (id, qtde, price) => {
        if(userStorage){
            setUserId(parseInt(userStorage.id));
        }
        
        const product_id = id;
        const quantity = qtde;
        console.log("produto_id-", product_id, "quantity-",quantity, "user_id-", user_id);

        axiosClient.post("/sales", {product_id, user_id, quantity},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStorage}`
              },
        })
        .then((response) => {
            if(response.status === 200){
                window.location.href = '/my-account';
                removeItem(product_id)
            }
                
               // return <Navigate to = "/my-account" />

        })
    }

    //verificar utilizador
    useEffect(()=>{
        if(userStorage){
          if(userStorage.type === 'C' && tokenStorage){
            setDisableDtn('');
            setDisableDtnMsg('');
          }
        } 
 
    },[]);

    return (
        <Container className="py-4 mt-5">
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`}>
                {isEmpty? 'Adiciona itens ao carrinho' : 'Carrinho'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.gallery[0]} style={{ width: '4rem'}} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.name}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantidade ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2" title={desableBtnMgs}>Eliminar item</Button>
                                        <Button variant="success" onClick={()=> buyItem(item.id, item.quantity, item.price)} className="ms-2" disabled={desableBtn} >Finalizar compra <br/><span style={{fontSize:'10px'}}>{desableBtnMgs}</span> </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`${theme? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
                    >
                        <Col className="py-2">
                            <h4>Preço Total: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={5}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Limpar carrinho
                            </Button>
                            {/*<Button variant="success"
                                className="m-2"
                            >
                                <BsCartCheck size="1.7rem" />
                                Finalizar compra
                            </Button> */}
                        </Col>
                    </Row>}
            </Row>
        </Container>
    );
};

export default Cart;