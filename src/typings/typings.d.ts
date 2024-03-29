declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

interface HeroProps {
  
}

interface AppProps {}

interface AppState {
  SURVEY_SCRIPT: Question[],
  SURVEY_ANSWERS: QuestionAnswer[],
  currentMajorQuestion: number,
  finished: boolean
}

interface QuestionAnswer {
  answer: string,
  question: string
}

interface Question {
  followUps?: string[],    // NOTE: UUID of a follow-up question to this one
  groupName?: string, // NOTE for grouped inputs like check/radio
  isMajorQuestion: boolean, // NOTE: is this a major question or a follow-up?
  majorQuestionPosition: number, // NOTE: if a major question, its position in the survey
  max?: string,
  min?: string,
  next: string,        // NOTE: UUID of the next major question in script,
  options?: QuestionOptions[],
  placeholder?: string,
  prompt: string,
  QID: string,         // NOTE: UUID of this question
  type: string,
  step?: string
}

interface QuestionOptions {
  name: string,
  value: string
}

interface QuestionState {
  questionID: number,
  answerPayload: string
}

interface QuestionProps {
  question: Question,
  handler: function,
  
}