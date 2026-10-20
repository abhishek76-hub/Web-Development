import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const[value, setValue] =useState(0)

  return (
    <div className="App">
      <Navbar logoText="Something"/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>click me</button>
      <Footer/>
    </div>
  );
}

export default App;
