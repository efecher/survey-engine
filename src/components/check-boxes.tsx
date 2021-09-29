import React, { useState } from 'react';
import { Form, FormGroup, Row, Col, Button, Container } from 'react-bootstrap';
import { v4 } from 'uuid';

export const CheckBoxes = (props: QuestionProps) => {
  //const [answer, setAnswer] = useState(new Array());

  // NOTE: to manage which check boxes are selected
  const [checkedState, setCheckedState] = useState(new Array(props.question.options!.length).fill(false));
  
  const handleChange = (position: number) => {
    //console.log(`position: ${position}`);
    const updatedCheckedState = checkedState.map((item, index) => {
      if(index === position) {
        return !item;
      } else {
        return item;
      }
    });

    setCheckedState(updatedCheckedState);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let decodedAnswerMatrix: object[] = [];

    checkedState.map((checked, index) => {
      if(checked) {
        decodedAnswerMatrix.push({question: props.question.prompt, answer: props.question.options![index].value});
      }
    });
    //console.log(decodedAnswerMatrix);
    props.handler(props.question.QID, decodedAnswerMatrix);
    // NOTE: reset the answer value so the bound input won't start with the answer you gave for the last question
    //return;
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
          <FormGroup>
            <Col sm={4} className="my-1">
              {(typeof props.question.options !== "undefined")? props.question.options!.map((option: QuestionOptions,index) => {
                return <Form.Check 
                  className="mb-3"
                  type="checkbox" 
                  id={`${props.question.groupName}-${index}`}
                  label={option.value}
                  checked={checkedState[index]}
                  name={props.question.groupName}
                  key={v4()}
                  onChange={() => handleChange(index)}
                  value={option.value}
                />
              }): null}
            </Col>
          </FormGroup>
          <Col sm={4} className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
} 

export default CheckBoxes;