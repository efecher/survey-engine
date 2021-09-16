import React from 'react';
import {Form} from 'react-bootstrap';

function App() {
  return (
    <div style={{"margin":"auto","width": "60rem"}}>
      <header>
        <p>
          <strong>Survey-Engine</strong>: a React concept for a survey application that can handle 
          <ul>
            <li>numeric, text, other kinds of input</li>
            <li>branched logic</li>
            <li>using a 'script' to map the flow of the survey, optional questions and what to do 
              if someone answers a certain question a certain way (follow-up questions)
            </li>
          </ul>
          Partial inspiration comes from the Typescript/Bootstrap overhaul of the Cost Calculator
        </p>
      </header>
    </div>
  );
}

export default App;
