import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import * as SurveyQuestions from "./data/survey-script.json";
import TextSingleLine from './components/text-single-line';

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentMajorQuestion: 0,
      SURVEY_SCRIPT: [],
      SURVEY_ANSWERS: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      SURVEY_SCRIPT: SurveyQuestions.script
    });
  }

  handleAnswerSubmit = (answerStorageID: string, answer: string) => {
    let _sa = this.state.SURVEY_ANSWERS;
    
    _sa.push({
      question: answerStorageID,
      answer: answer
    });

    let _cmq = this.state.currentMajorQuestion + 1;

    //console.log(_sa);
    
    this.setState({
      SURVEY_ANSWERS: _sa,
      currentMajorQuestion: _cmq
    });

    return;
  }

  render() {
    //console.log(SurveyQuestions);
    if(this.state.SURVEY_SCRIPT.length) {
      return (
        <ErrorBoundary>
          <div style={{"margin":"auto","width": "60rem"}}>
            {console.log(this.state.currentMajorQuestion)}
            <TextSingleLine question={this.state.SURVEY_SCRIPT[this.state.currentMajorQuestion]} handler={this.handleAnswerSubmit} />
          </div>
        </ErrorBoundary>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default App;
