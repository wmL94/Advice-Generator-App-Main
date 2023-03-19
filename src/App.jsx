import { useEffect, useState, } from 'react'
import './App.css'



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.adviceslip.com/advice');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const generateNewData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const jsonData = await response.json();
    setData(jsonData);
  };

  
  return (
    <div className='card'>
      <p>ADVICE #{data.slip && data.slip.id}</p>
      <h2>"{data.slip && data.slip.advice}"</h2>
      <img className='divider-desktop' src="./src/assets/pattern-divider-desktop.svg" alt="Divider desktop" />
      <img className='divider-mobile' src="./src/assets/pattern-divider-mobile.svg" alt="Divider mobile" />
      <div className='dice' onClick={generateNewData}>
        <img src="./src/assets/icon-dice.svg" alt="Dice icon" />
      </div>
    </div>
  )
}

export default App
