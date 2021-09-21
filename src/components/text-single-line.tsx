import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const TextSingleLine: React.FC<TextQuestionProps> = (props) => (
  <Container>
    <Form onSubmit={() => props.handler()}>
      <Row className="align-items-center">
        <Col sm={12} className="my-1">
          <Form.Label>{props.question.prompt}</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="my-1">
          <Form.Control type="text" placeholder={props.question.placeholder} />
        </Col>
        <Col sm={4} className="my-1">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  </Container>
);

export default TextSingleLine;