interface AppProps {}

interface AppState {
  SURVEY_SCRIPT: Question[],
  SURVEY_ANSWERS: QuestionAnswer[]
}

interface Question {
  placeholder: string,
  prompt: string,
  type: string,
  responseStorageID: number
}

interface QuestionState {
  questionID: number,
  answerPayload: string
}

interface TextQuestionProps {
  question: Question,
  handler: function
}
