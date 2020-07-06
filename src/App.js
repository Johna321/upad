import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/textarea/TextArea.jsx';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>UPad.</h1>
        <h3>(the universal notepad)</h3>
      </div>
      <div className="textArea">
        <TextArea />
      </div>
    </div>
  );
}

export default App;
