import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import './question.css';

export const TextSingleLine = (props: QuestionProps) => {
  const [answer, setAnswer] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.value);
  };
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handler(props.question.QID, answer);
    setAnswer(''); // NOTE: reset the answer value so the bound input won't start with the answer you gave for the last question
    return;
  }
  
  return(
    <Col className="page" md={10}>
    <Form onSubmit={(e) => { onSubmit(e) }}>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="my-1">
            <Form.Label>{props.question.prompt}</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="my-1">
            <Form.Control type="text" onChange={onChange} value={answer}  placeholder={props.question.placeholder} />
          </Col>
          <Col sm={4} className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Container>
    </Form>
    </Col>
  );
} 

export default TextSingleLine;