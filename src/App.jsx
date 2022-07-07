import './App.css';
import React, { useState } from 'react';
import List from './components/List/List';
import Details from './components/Details/Details';

function App() {
   const [info, setInfo] = useState({});

   return (
      <div className="App">
         <List selectUser={setInfo} />
         {info.id ? <Details info={info} /> : null}
      </div>
   );
}

export default App;
