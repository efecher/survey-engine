import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import * as SurveyQuestions from "./data/survey-script.json";
import Page from "./components/page";


class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentMajorQuestion: 0,
      SURVEY_SCRIPT: [],
      SURVEY_ANSWERS: [],
      finished: false
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

    // NOTE: check to see if we are at the last question before incrementing
    let _cmq = this.state.currentMajorQuestion;
    if((_cmq + 1) < this.state.SURVEY_SCRIPT.length) {
      _cmq++;
      this.setState({
        SURVEY_ANSWERS: _sa,
        currentMajorQuestion: _cmq
      });
    } else {
      // NOTE: we finished the survey, set flag in state
      this.setState({
        finished: true
      });
    }
    //console.log(_sa);
    return;
  }
  
  render() {
    //console.log(SurveyQuestions);
    if(this.state.SURVEY_SCRIPT.length) {
      if(!this.state.finished) {
        return (
          <ErrorBoundary>
            <div style={{"margin":"auto","width": "60rem"}}>
              {/*console.log(this.state.currentMajorQuestion)*/}
              <Page question={this.state.SURVEY_SCRIPT[this.state.currentMajorQuestion]} handler={this.handleAnswerSubmit} />
            </div>
          </ErrorBoundary>
        );
      } else {
        return <p>We have finished the survey!</p> 
      }
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default App;
