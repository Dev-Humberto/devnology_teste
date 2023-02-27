import React from 'react';
import { Button, Card, Col, Row} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';

const ProductCardFornecedor = (props) => {
    let { imagem, preco, nome, id, categoria, descricao, material, departamento} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }

    return (
        <>
           
            <Card style={{ width: '18rem' , margin: '5px'}}>
                <Card.Img variant="top" src={imagem} />
                <Card.Body style={{color:"#000000"}}>
                    <Button variant="primary">Adicionar aos produtos </Button>
                    <br />
                    <Card.Title>{nome}</Card.Title>
                    <Card.Text style={{fontSize:'12px'}}>
                        {descricao}
                        <br /> <br />  <b>Categoria: </b>  {categoria}
                        <br />  <b>Material: </b>  {material}
                        <br />  <b>Departamento: </b>  {departamento}
                        <br />  <b>  <span style={{fontSize:'20px'}}> Preço: {preco} </span> </b>  
                    </Card.Text>
                    
                </Card.Body>
            </Card>
          
        </>
    );
};

export default ProductCardFornecedor;