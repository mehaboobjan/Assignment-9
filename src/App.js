import React,{useState, useEffect} from 'react';

import Login from './components/Login/Login'; 
import Status from './components/Status/Status';
import axios from 'axios';




function App() {
  
  const [logStatus, setlogStatus] = useState(false);

  

  if(logStatus) return <Status/>
  
  console.log('here2');

  return (
    <div className="App">
     
     <Login setlogStatus={setlogStatus}/>
      
    </div>
  );
}

export default App;
