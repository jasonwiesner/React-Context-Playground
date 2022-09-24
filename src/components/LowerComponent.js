import { useContext } from 'react';
import TestContext from '../contexts/TestContext';
const LowerComponent = ({}) => {
  const { random, count } = useContext(TestContext);
  return (
    <div style={{marginTop: '50px'}}>
      Lower Component - {random}
      <p> count in lower component - {count} </p>
    </div>
  );
};

export default LowerComponent;