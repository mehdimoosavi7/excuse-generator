import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  var [excuse, setExcuse] = useState("");

  const showExcuse = (exc) => {
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${exc}`).then((res) => {
        setExcuse(res.data[0].excuse);
      })
  }

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => showExcuse("party")}>Party</button>
      <button onClick={() => showExcuse("family")}>Family</button>
      <button onClick={() => showExcuse("office")}>Office</button>
      <h3>{excuse}</h3>
    </div>
  );
}

export default App;
