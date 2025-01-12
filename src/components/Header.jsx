import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import theme_btn from '../assets/images/theme_button.png'
import logo from "../assets/images/Logo.png";
import logo_small from "../assets/images/logo_small.png";
import { NavLink } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import axios from "axios";
import Wrapper from "./Wrapper";

function Header() {
  const [navLink, setNavLink] = useState([
    // fallback if server not implemented
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/about",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:3000/links", {
        signal: controller.signal,
      })
      .then((response) => {
        setNavLink(response.data)
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          // console.log("request cancelled", error.message);
          return;
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
   <Wrapper background='#F7F7F6' className='sticky-top'>
     <Navbar expand="lg" >
      <Container className="px-md-0 px-4">
        <Navbar.Brand>
          <NavLink to='/' >
            <Image className=" d-none d-md-block " src={logo} />
            <Image className="d-block d-md-none " src={logo_small} />
          </NavLink>
        </Navbar.Brand>
       <div className="d-flex">
       <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Button className="d-md-none d-block" variant="none">
              <Image src={theme_btn}/>
            </Button>
       </div>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="me-auto  w-100 justify-content-end align-items-md-center align-items-start">
            {navLink.map((item,index)=>{
              return (
               <NavLink  className={({isActive})=>isActive?"nav-link mx-2 text-dark border-bottom border-2 border-dark":"nav-link mx-2 text-dark"}  key={index} to={item.url}>{item.name}</NavLink>

              )
            })}
           
           <Button className="d-md-block d-none" variant="none">
              <Image src={theme_btn}/>
            </Button>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
   </Wrapper>
  );
}

export default Header;
