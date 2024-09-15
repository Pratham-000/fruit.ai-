// About.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MyComponent } from '../assets/MyComponent';
const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={12} className="text-center">
          <h1>About Us</h1>
          <p className="lead">
            Welcome to Fruit.ai your trusted partner in transportation solutions.
          </p>
        </Col>
      </Row>
      <Row >
        <Col md={6}>
          <Card className="mt-5">
            <Card.Img variant="top" src= {MyComponent.img_1} />
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At Move.it our mission is to provide reliable and efficient transportation services
                that meet the needs of our diverse clientele. We are committed to safety, punctuality, and customer satisfaction.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mt-5">
            <Card.Img variant="top" src= {MyComponent.img_2}  />
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                We believe in integrity, innovation, and excellence. Our team works tirelessly to ensure that we exceed
                expectations and set new standards in the transportation industry.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
