import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { Button, Col, Row, Image } from "react-bootstrap";
import hero from "../assets/images/m1.jpg";
import hero_img from "../assets/images/hero_img.png";
import style from "../style/home.module.css";
import AccordionCard from "../components/AccordionCard";
import AccordionItem from "../components/AccordionItem";
import img1 from "../assets/images/domine.png";
import img2 from "../assets/images/acc2.jpg";
import img3 from "../assets/images/acc3.jpg";
import LargeCard from "../components/LargeCard";
import grid1 from "../assets/images/grid1.png";
import grid2 from "../assets/images/grid2.png";
import grid3 from "../assets/images/grid3.png";
import grid4 from "../assets/images/grid4.png";
import AOS from "aos";

function Home() {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      {/* hero */}
      <Wrapper background="#F7F7F6" className="py-md-5 py-0 ">
        <Row className="h-100 mx-0 g-0 overflow-hidden align-items-center">
          <Col md={7} className="order-2 order-md-1 p-4 p-md-0 ">
            <div className={style.hero_heading}>
              <h1
                className="display-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Central Texas <span className="d-block">Fly Fishing</span>
              </h1>
              <p
                className="fs-5 py-1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                At lacus vitae nulla sagittis scelerisque nisl. Pellentesque
                duis cursus vestibulum, facilisi ac, sed faucibus.
              </p>
              <Button className="px-3 py-2">Get started</Button>
            </div>
          </Col>
          <Col md={5} className="order-1 order-md-2">
            <Image
              className="p-0 p-md-3 "
              src={screen < 768 ? hero : hero_img}
              width={"100%"}
            />
          </Col>
        </Row>
      </Wrapper>

      {/* feature option */}
      <Wrapper background="#F1ECE1">
        <div className={`py-md-5 py-3 ${style.feature_section}`}>
          <h1
            className="display-4 px-3 px-md-0 pt-3"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            Featured options
          </h1>
          <div className="mt-3">
            {screen > 768 ? (
              <div>
                <AccordionItem />
              </div>
            ) : (
              <div className="px-3 pt-3">
                <AccordionCard
                  img={img1}
                  title="Explore Fly Fishing"
                  body="Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc"
                />
                <AccordionCard
                  img={img2}
                  title="Fly Fishing Experiences"
                  body="Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque"
                />
                <AccordionCard
                  img={img3}
                  title="Gear Up and Catch More"
                  body="In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S"
                />
              </div>
            )}
          </div>
        </div>
      </Wrapper>

      {/* member stories     */}
      <Wrapper background="#F7F7F6" className="h-100 py-5 px-md-0 px-3  ">
        <div className={style.stories_section}>
          <h1 className="display-4 py-md-0 py-3">Member stories</h1>
          <hr className="d-md-none d-block" />
          <Row className="mx-0 g-0 pt-md-2 pt-0">
            <Col
              lg={6}
              md={12}
              className="mb-md-0 mt-md-0 mb-3 mt-4 "
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="800"
            >
              <LargeCard
                image={grid1}
                title="john's story"
                body="Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh "
              />
              <hr className="d-md-none d-block" />
            </Col>
            <Col
              lg={6}
              md={12}
              className="mb-md-0 mt-md-0 mb-3 mt-4 "
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              <LargeCard
                image={grid2}
                title="the journey"
                body="Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc "
              />
              <hr className="d-md-none d-block" />
            </Col>
            <Col
              lg={6}
              md={12}
              className="mb-md-0 mt-md-0 mb-3 mt-4 "
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
            >
              <LargeCard
                image={grid3}
                title="catch day"
                body="Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh "
              />
              <hr className="d-md-none d-block" />
            </Col>
            <Col
              lg={6}
              md={12}
              className="mb-md-0 mt-md-0 mb-3 mt-4"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1400"
            >
              <LargeCard
                image={grid4}
                title="trout tales"
                body="Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed"
              />
              <hr className="d-md-none d-block" />
            </Col>
          </Row>
        </div>
      </Wrapper>
    </div>
  );
}

export default Home;
