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

interface TextQuestionProps {
  question: Question,
  handler: function
}

interface QuestionAnswer {
  responseStorageID: string,
  response: string
}