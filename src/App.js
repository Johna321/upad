import React from 'react';
import './App.css';
import TextArea from './components/textarea/TextArea.jsx';
import logo from './upadbig.svg'

function App() {
  return (
    <div className="App">
      <div className="title">
        <img className="mainLogo" src={logo} />
      </div>
      <div className="textArea">
        <TextArea />
      </div>
    </div>
  );
}

export default App;
