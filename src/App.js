import './App.css';
import { useState, useRef } from 'react';
import TestContext from './contexts/TestContext';
import CounterButtons from './components/CounterButtons';
import Count from './components/Count';
import LowerComponent from './components/LowerComponent';

function App() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState('Default Random String');
  const randomInputRef = useRef(null);
  return (
    <div className="App">
      <p>
        React Context Playground
      </p>
      <TestContext.Provider value={{ count, setCount }}>
        <CounterButtons />
        <hr/>
        <Count />
      </TestContext.Provider>
      <div>
      <TestContext.Provider value={{ random, count }}>
        <input name="randomInput" type="text" ref={randomInputRef} onKeyPress={(e) => { if (e.key === 'Enter') { setRandom(randomInputRef.current.value) }}}/>
        <button name="randomButton" type="button" onClick={(e) => setRandom(randomInputRef.current.value)}>Set Random</button>
        <LowerComponent />
      </TestContext.Provider>
      </div>
    </div>
  );
}

export default App;
