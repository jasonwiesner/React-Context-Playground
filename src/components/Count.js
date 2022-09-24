import { useContext } from 'react';
import TestContext from '../contexts/TestContext';
const Count = ({}) => {
  const { count } = useContext(TestContext);
  return (
    <div style={{fontSize: '5rem', marginTop: '50px', color: 'blue'}}>
      {count}
    </div>
  );
};

export default Count;