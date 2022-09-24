import { useContext } from 'react';
import TestContext from '../contexts/TestContext';
const CounterButtons = ({}) => {
  const { setCount } = useContext(TestContext);
  return (
    <div>
      <button 
      type="button" 
      name="increment" 
      style={{margin: '5px 5px 5px -5px', fontSize: '1.5rem'}} 
      onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
      <button 
      type="button" 
      name="decrement" 
      style={{ fontSize: '1.5rem'}}
      onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default CounterButtons;