import React from 'react';
import { Button, Card, Col, Row} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';

const ProductCardFornecedor2 = (props) => {
    let { hasDiscount, name, gallery, description, price, discountValue, details, id} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }

    return (
        <>
           
            <Card style={{ width: '18rem' , margin: '5px'}}>
                <Card.Img variant="top" src={gallery[0]} />
                <Card.Body style={{color:"#000000"}}>
                    <Button variant="primary">Adicionar aos produtos </Button>
                    <br />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{fontSize:'12px'}}>
                        {description}
                        <br />  <b>Material: </b>  {details.material}
                        <br />  <b> {hasDiscount === true ? `Desconto: ${discountValue}`: ''} </b> 
                        <br />  <b>  <span style={{fontSize:'20px'}}> Preço: {price} </span> </b>  
                    </Card.Text>
                    
                </Card.Body>
            </Card>
          
        </>
    );
};

export default ProductCardFornecedor2;