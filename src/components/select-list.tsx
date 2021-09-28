import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { uuid } from 'uuidv4';

export const SelectList = (props: QuestionProps) => {
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
  
  const generateOptions = (options: QuestionOptions[]) => {
    let output: JSX.Element[] = options.map((o) => {
      return <option key={uuid()} value={o.value}>{o.name}</option>;
    });

    return output;
  }


  return(
    <Form onSubmit={(e) => { onSubmit(e) }}>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="my-1">
            <Form.Label>{props.question.prompt}</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="my-1">
            <Form.Control as="select" className="form-select" onChange={onChange}>
              {
                (props.question.options !== undefined)?
                  generateOptions(props.question.options): null
              }
            </Form.Control>
          </Col>
          <Col sm={4} className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
} 

export default SelectList;