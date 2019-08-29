//Carousel Component 
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Prayertimes from "../PrayerTimes";
import { MDBBtn } from "mdbreact";

export default function MyCarousel() {
  return (
    <div>
      <div style={{ position: "absolute", top:'130px', left:'230px', zIndex:'3' }}>
        <Prayertimes />
      </div>
      
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block mw-100"
            src="https://mdbootstrap.com/img/Photos/Others/images/78.jpg"
            alt="First slide"
          />

          <Carousel.Caption style={{ bottom: "90px" }}>
            <h3></h3>
           
            <MDBBtn
              outline
              bt="lg"
              gradient="peach"
              style={{
                fontSize: "15px",
                padding: "20px",
                paddingRight: "20px",
                paddingLeft: "40px",
                right:'30px',
                top:'30px',
              }}
            >
              View Full Table
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
            <h3></h3>
            
            <MDBBtn
              outline
              gradient="amy-crisp"
              bt="lg"
              style={{
                fontSize: "15px",
                padding: "20px",
                paddingRight: "20px",
                paddingLeft: "40px",
                right:'30px',
                top:'70px'
              }}
            >
              View Full Table
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
            <h3></h3>
            
            <MDBBtn
              outline
              gradient="blue"
              bt="lg"
              style={{
                fontSize: "15px",
                padding: "20px",
                paddingRight: "20px",
                paddingLeft: "40px",
                right:'30px',
                top:'70px'
              }}
            >
              View Full Table
              <i
                className="fas fa-graduation-cap ml-2"
                aria-hidden="true"
                style={{ paddingRight: "10px" }}
              />
            </MDBBtn>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
