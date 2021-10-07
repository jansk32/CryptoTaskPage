import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import CryptoList from './cryptoList';
import axios from 'axios';

function App() {

  useEffect(() => {
    // axios.get("http://api.coingecko.com/api/v3/coins/markets",{
    //   vs_currency: "aud"
    // }).then(resp => console.log(resp))
    // .then(data => console.log(data))
    fetch("http://api.coingecko.com/api/v3/coins/markets?vs_currency=aud", {
      method: 'GET',
      //mode: 'cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*"
      }
    })
    // .then(res => console.log(res))
    // .then(data => console.log("DATA: " + data))
    // .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CryptoList />
    </div>
  );
}

export default App;
