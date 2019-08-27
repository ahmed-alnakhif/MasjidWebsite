import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Prayertimes from "../PrayerTimes";
import { MDBBtn } from "mdbreact";

export default function MyCarousel() {
  return (
    <Carousel controls="false" indicators="false">
      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="https://mdbootstrap.com/img/Photos/Others/images/78.jpg"
          alt="First slide"
        />

        <Carousel.Caption style={{ bottom: "130px" }}>
          <Prayertimes />
          <h3>First slide label</h3>
          <p>
            “Knock, And He'll open the door Vanish, And He'll make you shine
            like the sun Fall, And He'll raise you to the heavens Become
            nothing, And He'll turn you into everything.”
          </p>
          <MDBBtn
            outline
            gradient="peach"
            bt="lg"
            style={{
              fontSize: "15px",
              padding: "20px",
              paddingRight: "20px",
              paddingLeft: "40px"
            }}
          >
            Learn More
            <i
              className="fas fa-graduation-cap ml-2"
              aria-hidden="true"
              style={{ paddingRight: "10px" }}
            />
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="https://mdbootstrap.com/img/Photos/Others/images/79.jpg"
          alt="Third slide"
        />

        <Carousel.Caption style={{ bottom: "250px", margin: "0px" }}>
          <Prayertimes />
          <h3>Second slide label</h3>
          <p>
            “Be peaceful, be courteous, obey the law, respect everyone; but if
            someone puts his hand on you, send him to the cemetery.”{" "}
          </p>
          <MDBBtn
            outline
            gradient="amy-crisp"
            bt="lg"
            style={{
              fontSize: "15px",
              padding: "20px",
              paddingRight: "20px",
              paddingLeft: "40px"
            }}
          >
            Learn More
            <i
              className="fas fa-graduation-cap ml-2"
              aria-hidden="true"
              style={{ paddingRight: "10px" }}
            />
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="https://mdbootstrap.com/img/Photos/Others/images/47.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{ bottom: "280px", margin: "0px" }}>
          <Prayertimes />
          <h3>Third slide label</h3>
          <p>
            “What has he found who has lost God? And what has he lost who has
            found God?”
          </p>
          <MDBBtn
            outline
            gradient="blue"
            bt="lg"
            style={{
              fontSize: "15px",
              padding: "20px",
              paddingRight: "20px",
              paddingLeft: "40px"
            }}
          >
            Learn More
            <i
              className="fas fa-graduation-cap ml-2"
              aria-hidden="true"
              style={{ paddingRight: "10px" }}
            />
          </MDBBtn>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
