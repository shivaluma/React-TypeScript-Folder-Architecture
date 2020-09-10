import React from 'react';
import './App.scss';
import Expandable from './components/Expandable';

function App() {
  return (
    <div className="App">
      <Expandable>
        <Expandable.Header>Section one</Expandable.Header>

        <Expandable.Body>
          Wao wao wao wao wao wao wao wao wao wao wwao, Wao wao wao wao wao wao
          wao wao wao wao wwao,Wao wao wao wao wao wao wao wao wao wao wwao
        </Expandable.Body>
      </Expandable>

      <Expandable>
        <Expandable.Header>Section two</Expandable.Header>

        <Expandable.Body>
          <Expandable>
            <Expandable.Header>Sub Section</Expandable.Header>

            <Expandable.Body>Lorem ifsum dolosit ammet.....</Expandable.Body>
          </Expandable>
        </Expandable.Body>
      </Expandable>

      <Expandable>
        <Expandable.Header>Section three</Expandable.Header>

        <Expandable.Body>Lorem ifsum dolosit ammet.....</Expandable.Body>
      </Expandable>
    </div>
  );
}

export default App;
