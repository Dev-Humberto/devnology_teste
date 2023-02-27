import React, {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

import Table from 'react-bootstrap/Table';

const Users = () => {
    

    return (
        <Table striped bordered hover variant="dark" style={{marginTop:'40px'}}>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> Nome de utilizador </th>
                    <th> Email </th>
                    <th> Telefone </th>
                    <th> Tipo </th>
                    <th> Ações </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
            </tbody>
        </Table>
    );
};

export default Users;