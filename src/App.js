import './App.css';
import { useState } from 'react';
import TestContext from './contexts/TestContext';
import CounterButtons from './components/CounterButtons';
import Count from './components/Count';

function App() {
  const [count, setCount] = useState(0);
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
    </div>
  );
}

export default App;
