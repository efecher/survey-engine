import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export const TextSingleLine = (props: TextQuestionProps) => {
  const [answer, setAnswer] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.value);
  };
  
  
  return(
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
          <Button onClick={() => props.handler(props.question.responseStorageID, answer)}>Submit</Button>
        </Col>
      </Row>
    </Container>
  );
} 

export default TextSingleLine;