import React from 'react';
import Title from './components/Title.js'
import Summary from './components/Summary.js'
import Image from './components/Image.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Resume-header">
          <Image/>
          <Title/>
        </div>

        <Summary/>
        <div className="footer">
          <a
            className="Github-link"
            href="https://github.com/ElliotBarnwell"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
