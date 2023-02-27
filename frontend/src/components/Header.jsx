import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart} from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";

import axiosClient from "../axios-client";

const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);

    const {
        isEmpty,
        totalItems,
    } = useCart();

    //verificar se o utilizador fez login
    const userStorage = JSON.parse(localStorage.getItem("USER"));
    const tokenStorage = localStorage.getItem("ACCESS_TOKEN");
   
    const [adminDisplay, setAdminDisplay] = useState('none');
    const [userDisplay, setUserDisplay] = useState('');
    const [tokenDisplay, setTokenDisplay] = useState('');
    const [logoutDisplay, setLogoutDisplay] = useState('none');
    const [minhaContaDisplay, setMinhaContaDisplay] = useState('none');
    const [username, setUsername] = useState('Minha conta');
    useEffect(()=>{
      if(userStorage){
        setUsername(userStorage.name);
        if(userStorage.type === 'A'){
          setAdminDisplay('');
          setUserDisplay('none');
        }else{
          setAdminDisplay('none');
          setUserDisplay('');
        }
      }
      if(tokenStorage){
        if(tokenStorage){
          setTokenDisplay('none');
          setLogoutDisplay('');
          setMinhaContaDisplay('');
        }
      }
    },[adminDisplay, userDisplay]);

    const logout = () => {
      localStorage.clear();
      //navigate('/', {replace: true})
      window.location.href = '/';
    }
  

    return (
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}
                className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
        <Container>
          <Link to="/">
            <Navbar.Brand className={darkMode? 'text-dark-primary': 'text-light-primary'}>
                <b>Teste</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <span style={{display: tokenDisplay}}><Link to="sign-in" className={`nav-link ${darkMode? 'text-dark-primary' : 'text-light-primary'}`} >
                Login
              </Link></span>
              <Nav.Link 
                className={darkMode? 'text-dark-primary': 'text-light-primary'}
                onClick={()=>setDarkMode(!darkMode)}
              >
                {darkMode? <BiSun size="1.7rem" />: <BiMoon size="1.7rem" />}
              </Nav.Link>
              <span style={{display: userDisplay}}>
              <Link
                to="/cart"
                className={`${darkMode? 'text-dark-primary': 'text-light-primary'} d-flex align-items-center`}
              >
                <BiCart size="2rem"/>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp;Carrinho</span>
              </Link> </span>
              <span style={{display: minhaContaDisplay}}><Link to="my-account" className={`nav-link ${darkMode? 'text-dark-primary': 'text-light-primary'}`} >
                  <VscAccount size="1.8rem"/>
                  &nbsp;{username}
              </Link></span>
              
              <Link to="admin" className={`nav-link ${darkMode? 'text-dark-primary': 'text-light-primary'}`} style={{display: adminDisplay}}>
                  &nbsp;Dasboard
              </Link>


              <a href="#" onClick={logout} className={`nav-link ${darkMode? 'text-dark-primary': 'text-light-primary'}`} style={{display: logoutDisplay}}> &nbsp;Sair </a>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;