import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Col, Container, Row, Image } from "react-bootstrap";
import logo_footer from "../assets/images/Logo_footer.png";
import fb from "../assets/images/fb.png";
import ig from "../assets/images/ig.png";
import linkdin from "../assets/images/ldin.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Footer() {
  const [footerLink, setfooterLinks] = useState([
    // fallback if server not implemented
    {
      name: "FAQ",
      url: "/faq",
    },
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Support",
      url: "/support",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:3000/footer_links", {
        signal: controller.signal,
      })
      .then((response) => {
        setfooterLinks(response.data);
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
    <Wrapper background="#1C1812" >
      <Container style={{ color: "#F7F7F6" }}>
        <Row className="py-3">
          <Col lg={1} md={12} className="d-flex justify-content-center">
            <Image className="" src={logo_footer} />
          </Col>
          <Col className="d-flex justify-content-lg-start  justify-content-center align-items-center py-3 ">
           {footerLink.map((item,index)=>{
              return <Link className="text-decoration-none px-3" style={{color:'#F7F7F6'}} key={index}>{item.name}</Link>
           })}
          </Col>
          <Col lg={3} md={12} className="d-flex justify-content-center">
            <Image src={fb} width={50} height={50}/>
            <Image src={ig} width={50} height={50}/>
            <Image src={linkdin} width={50} height={50}/>
          </Col>
        </Row>
      </Container>
      <Container
        className="d-flex justify-content-center py-3"
        style={{ color: "#AEADAA" }}
      >
        <span style={{ fontSize: "0.8rem" }}>
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </span>
      </Container>
    </Wrapper>
  );
}

export default Footer;
