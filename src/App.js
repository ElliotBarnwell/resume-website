import React from 'react';
import Title from './components/Title.js'
import Summary from './components/Summary.js'
import ProfImage from './components/ProfImage.js'
import Github from './components/Github.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "Img-Container"><ProfImage/></div>
        <div className="Resume-header">
          <Title/>
        </div>
        <div className="Content">
            <Summary/>
        </div>

        <div className="footer">
          <Github/>
        </div>

      </header>
    </div>
  );
}

export default App;
