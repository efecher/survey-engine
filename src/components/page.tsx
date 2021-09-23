import React from 'react';
import TextSingleLine from './text-single-line';
import NumberInput from './number-input';


export const Page = (props: QuestionProps) => {
  if(props.question.type === "text-single-line") {
    return <TextSingleLine question={props.question} handler={props.handler} />
  } else {
    return <NumberInput question={props.question} handler={props.handler} />
  }
}

export default Page;