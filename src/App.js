import './App.css';
import TxtField from './components/TxtField';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState('');
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setMsg(input);
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <TxtField value={input} onChange={handleChange} />
      <br></br>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
