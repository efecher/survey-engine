import React from 'react';
import {Form} from 'react-bootstrap';
import * as SurveyQuestions from "./data/survey-script.json";
import TextSingleLine from './components/text-single-line';

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      SURVEY_SCRIPT: SurveyQuestions.script,
      SURVEY_ANSWERS: []
    };
  }

  handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    return;
  }

  render() {
    console.log(SurveyQuestions);
    return (
      <div style={{"margin":"auto","width": "60rem"}}>
        <TextSingleLine question={this.state.SURVEY_SCRIPT[0]} handler={this.handleAnswerSubmit} />
      </div>
    );
  }
}

export default App;
