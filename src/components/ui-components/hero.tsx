import { Container, Row, Col } from 'react-bootstrap';
import './hero.css';

export const Hero = (props: HeroProps) => {
  return (
    <Container className="hero-container">
      <Row>
        <Col md={10}>
          <h1 className="hero-h1">Hero Content Here</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;