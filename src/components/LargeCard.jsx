import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import img1 from "../assets/images/grid1.png";
import { Link } from "react-router-dom";
import style from "../style/card.module.css";

function LargeCard({ title, image, body }) {
  return (
    // <div className="d-flex align-items-center ">
    //   <div className={style.cardText}>
    //     <h2 className="d-md-none d-block">{title}</h2>
    //     <Row className={style.card_image}>
    //       <Col md={12} sm={5}>
    //         <Image src={image} className="w-100" />
    //       </Col>
    //     </Row>
    //     <Button className="d-md-none d-block">read more</Button>
    //   </div>
    //   <div className={`p-4 ${style.cardText}`}>
    //     <h2 className="d-md-block d-none">{title}</h2>
    //     <Row>
    //       <Col md={12} sm={7}>
    //         <p>{body}</p>
    //       </Col>
    //     </Row>
    //     <Button className="d-md-block d-none">Read more</Button>
    //   </div>
    // </div>

    <Row className={`mb-5 p-md-0  w-100 align-items-center pt-md-4   ${style.cardText}`}>
         <h1 className="d-md-none d-block">{title}</h1>
        <Col className="col-md-5 col-4">
         <div>
         <Image src={image} width={'100%'} />
       
         </div>
        </Col>
       

        <Col className="col-md-7 col-8">
           <div>
             <h1 className="d-md-block d-none ">{title}</h1>
             <span className="d-block py-2">{body}</span>
             <a type="button" className="d-md-inline d-none">Read More</a>
           </div>
        </Col>
        <a type="button" className="d-md-none w-auto ms-3 mt-0" style={{background:"none",border:"1px solid"}}>Read More</a>
    </Row>
  );
}

export default LargeCard;
