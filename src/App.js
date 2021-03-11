import { useState } from 'react';
import './App.css';
import data from './data';
import AppRouter from './Router';

function App() {
  const [personData, setPersonData] = useState(data);

  return (
    <div className='app'>
      <div className='app-container'>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
