
import ReactDOM from "react-dom/client";
import React, {useEffect, useState} from 'react';


function App() {
  const [time,setTime] = useState(new Date());

  useEffect(() =>{

    setInterval(() =>setTime(new Date()),1000)
  },[])

    return(
      <React.Fragment>
        <p>{time.toLocaleDateString()}</p>
        <p>{time.toLocaleTimeString()}</p>
      </React.Fragment>
    )
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);