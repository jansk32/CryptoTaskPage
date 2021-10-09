import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import CryptoList from './cryptoListComponent';

function App() {

  var [data, sethata] = useState([]);

  useEffect(() => {
    axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud", {crossDomain: true})
    .then(res => sethata(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <div style={{backgroundColor: "blue", paddingTop: 0, height: "70vh"}}>
        <div style={{top: "50%",left: "50%"}}>
      <h1>Crypto Coins</h1>
      <p>Listing of Prices</p>
      </div>
      </div>
      <center>
      <table style={{width: "70%", paddingTop: "10%"}}>
        <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Current Price</th>
                    <th>Market Cap</th>
                    <th>Total Volume</th>
                    <th>Price Change 24h</th>
                    <th>Circulating Supply</th>
        </thead>
                <tbody>
                {data.map((c) => {
                  return(
                  <CryptoList coin={c}/>
                  )
                })}
                </tbody>
    </table>
    </center>
    </div>
  );
}

export default App;
