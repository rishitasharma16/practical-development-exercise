import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Image, Row } from "react-bootstrap";
import style from '../style/accordion.module.css'
function AccordionCardLarge({title,image,body}) {
  return (
    <Card className={style.card_section} >
      <Row style={{background:'#F1ECE1'}}>
        <Col md={5} >
          <Image src={image} className="w-100" />
        </Col>
        <Col md={7} className="px-0">
          <Card.Body>
            <Card.Title><span className="fs-1 fw-bold">{title}</span></Card.Title>
           
            <Card.Text className="pe-5">
              <span className="fs-5">{body}</span>
            </Card.Text>
            <Card.Link href="#" >Learn more</Card.Link>
            
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default AccordionCardLarge;
