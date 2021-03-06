import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";
import avatar from "../svg/avatar.webp";

export default function NavBar(props) {
  function overflowShow() {
    document.body.style.overflowY = "auto";
  }

  function overflowHide() {
    document.body.style.overflowY = "hidden";
  }
  return (
    <Navbar
      collapseOnSelect
      expand='sm'
      variant='dark'
      id='main-navbar'
      fixed='top'
    >
      <Navbar.Brand
        id='avatar-name'
        to='/'
        as={Link}
        href='/'
        onClick={overflowHide}
      >
        <img
          id='avatar'
          style={{ borderRadius: "50%" }}
          alt=''
          src={avatar}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{" "}
        Alejandro Busse
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/' href='/' onClick={overflowHide}>
            {props.lang === "es" ? "Inicio" : "Home"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/about'
            href='/about'
            onClick={overflowShow}
            style={{ minWidth: "5.5rem" }}
          >
            {props.lang === "es" ? "Sobre mí" : "About me"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/projects'
            href='/projects'
            onClick={overflowShow}
          >
            {props.lang === "es" ? "Proyectos" : "Projects"}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/contact'
            href='/contact'
            onClick={overflowShow}
          >
            {props.lang === "es" ? "Contacto" : "Contact"}
          </Nav.Link>
          <Navbar.Text style={{ textAlign: "right", paddingRight: "5px" }}>
            <button
              onClick={props.switchLang}
              id='switchL'
              title={
                props.lang === "es" ? "Change language" : "Cambiar lenguaje"
              }
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <img
                src={
                  props.lang === "es"
                    ? require("../svg/switch-en.png")
                    : require("../svg/switch-es.png")
                }
                alt='switch language'
                height='22px'
                width='auto'
              ></img>
            </button>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
