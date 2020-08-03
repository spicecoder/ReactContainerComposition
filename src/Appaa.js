import React from 'react';
import CaddC from './components/c_add_c'; 
import Clist from  './components/c_list';
import './App.css';

function App() {

  const ar = ['x','y','nn'];
    const elements = ['one', 'two', 'three'];
  return (
    <div>
    <CaddC />
    <Clist members ={ar}/>
    </div>
  );
}

export default App;
