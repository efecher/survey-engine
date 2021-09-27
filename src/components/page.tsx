import React from 'react';
import TextSingleLine from './text-single-line';
import NumberInput from './number-input';
import SelectList from './select-list';


export const Page = (props: QuestionProps) => {
  switch(props.question.type) {
    case "number-input": return <NumberInput question={props.question} handler={props.handler} />;

    case "select-list": return <SelectList question={props.question} handler={props.handler} />;
    
    // NOTE: Default question type is a simple single line text
    default: return <TextSingleLine question={props.question} handler={props.handler} />;
  }
}

export default Page;