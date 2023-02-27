import React, {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

import Table from 'react-bootstrap/Table';

const Sales = () => {
    

    return (
        <Table striped bordered hover variant="dark" style={{marginTop:'40px'}}>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> Produto </th>
                    <th> Quantidade </th>
                    <th> Ações </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
            </tbody>
        </Table>
    );
};

export default Sales;