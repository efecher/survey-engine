import React from 'react';
import ErrorBoundary from './ErrorBoundary';
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

  handleAnswerSubmit = (answerStorageID: number, answer: string) => {
    let _sa = this.state.SURVEY_ANSWERS;
    
    _sa.push({
      question: answerStorageID,
      answer: answer
    });

    console.log(_sa);
    
    this.setState({
      
    });
  }

  render() {
    console.log(SurveyQuestions);
    return (
      <ErrorBoundary>
        <div style={{"margin":"auto","width": "60rem"}}>
          <TextSingleLine question={this.state.SURVEY_SCRIPT[0]} handler={this.handleAnswerSubmit} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
