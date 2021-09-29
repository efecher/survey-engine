import TextArea from './text-area';
import TextSingleLine from './text-single-line';
import NumberInput from './number-input';
import SelectList from './select-list';
import RadioButtons from './radio-buttons';
import CheckBoxes from './check-boxes';


export const Page = (props: QuestionProps) => {
  switch(props.question.type) {
    case "number-input": return <NumberInput question={props.question} handler={props.handler} />;

    case "select-list": return <SelectList question={props.question} handler={props.handler} />;

    case "text-area": return <TextArea question={props.question} handler={props.handler} />;

    case "radio-buttons": return <RadioButtons question={props.question} handler={props.handler} />;

    case "check-boxes": return <CheckBoxes question={props.question} handler={props.handler} />;
    
    // NOTE: Default question type is a simple single line text
    default: return <TextSingleLine question={props.question} handler={props.handler} />;
  }
}

export default Page;