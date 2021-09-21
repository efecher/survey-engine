import React, { ChangeEventHandler } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

class TextSingleLine extends React.Component<TextQuestionProps, QuestionState> {
  constructor(props: TextQuestionProps) {
    super(props);

    this.state = {
      questionID: props.question.responseStorageID,
      answerPayload: ""
    }
  }

  handleTextBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const responseValue = e.target.value;
    this.setState({
      answerPayload: responseValue
    });

    return;
  }

  render() {
    return(
      <Container>
        <Form onSubmit={this.props.handler}>
          <Row className="align-items-center">
            <Col sm={12} className="my-1">
              <Form.Label>{this.props.question.prompt}</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="my-1">
              <Form.Control type="text" onChange={this.handleTextBoxChange} value={this.state.answerPayload}  placeholder={this.props.question.placeholder} />
            </Col>
            <Col sm={4} className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
export default TextSingleLine;