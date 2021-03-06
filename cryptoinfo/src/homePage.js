import {useEffect, useState} from 'react';
import './App.css';
import cryptoHeader from './cryptoheader.jpeg'
import axios from 'axios';
import CryptoList from './cryptoListComponent';
import LoadingComponent from './loadingComponent';
import ErrorComponent from './noResultsComponent';


function HomePage() {

  var [data, setData] = useState([]);
  var [shownData, setShownData] = useState([]);
  var [limit, setLimit] = useState(10)
  var [isLoad, setIsLoad] = useState(false);
  var [isErr, setErr] = useState(false);
  var [loadMore, setLoadMore] = useState(false);

  // Sort takes in isSort and a column
  var [sort, setSort] = useState({
    isSort: false,
    column: "name",
    isAscending: false
  })

  // initial useEffect to draw the data needed
  useEffect(() => {
    axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud", {crossDomain: true})
    .then(res => {
      setData(res.data)
      setShownData(res.data)
      setIsLoad(true)
    })
    .catch(err => setErr(true))
  },[])


  // handle click of load More button
  function isLoadMore() {
    setLoadMore(true);
    setLimit(limit + 10);
    setLoadMore(false);
  }

  // handle click on heading
  async function sortColumn(e){
    var col = e.target.innerText.toLowerCase().replaceAll(" ", "_");
    if (sort.column !== col){
    setSort({
      isSort: true,
      column: col,
      isAscending: false
    })}
    await console.log("Sorting data: " + col)
    // await setData(data.sort((a,b) => compare(a[col],b[col])))
      var tmp = await data.sort((a,b) => compare(a[col],b[col]))
      if (sort.isAscending === false){
        await setShownData(tmp)
        await setSort({
          isSort: false,
          column: col,
          isAscending: true
        });
      }else{
        await setShownData(tmp.reverse())
        await setSort({
          isSort: false,
          column: "",
          isAscending: false
        });
      }
      
  }

  // sort based on column
  function compare(x1, x2) {
    if (x1 < x2){
      return -1;
    }if (x1 > x2){
      return 1;
    }else{
      return 0;
    }
  }

  // Search Bar
  function searchBar(e){
    var val = e.target.value.toLowerCase();
    if (val) {
      let n = data.filter(obj => (obj.name.toLowerCase().includes(val) || obj.symbol.toLowerCase().includes(val)))
      setShownData(n)
    }else{
      setShownData(data)
    }
  }

  return (
    (isLoad ? <div className="App">
      <div style={{backgroundImage: `url(${cryptoHeader})`, height: "70vh", backgroundColor: "rgba(255,255,255,0.5)"}}>
      
        <div id="titleText">
      <h1>Crypto Coins</h1>
      <p>Finding your next investment</p>
      </div>
      </div>
      <center>
      
      <input placeholder="Search..." name="filter" onChange={searchBar} id="filterBar"/>

      <table className="tableFullList">
                    <th></th>
                    <th><button onClick={sortColumn}>Name</button></th>
                    <th><button onClick={sortColumn}>Current Price</button></th>
                    <th> <button onClick={sortColumn}>Market Cap</button></th>
                    <th> <button onClick={sortColumn}>Total Volume</button></th>
                    <th> <button onClick={sortColumn}>Price Change 24h</button></th>
                    <th> <button onClick={sortColumn}>Circulating Supply</button></th>
                <tbody>
                {shownData.length > 0 ? shownData.slice(0,limit).map((c) => {
                  return(
                  <CryptoList coin={c} key={c.id}/>
                  )
                }): <ErrorComponent errorMessage="NO COINS FOUND!" error="noResult" style={{backgroundColor: "blue"}}/>} 
                </tbody>
    </table>
    {data.length > limit && shownData.length > 10 && <button onClick={isLoadMore}>Load 10 more</button>}
    </center>
    <br />
    </div> : (isErr ? <ErrorComponent errorMessage="Unable to find coins" error="Not Connected"/> : <LoadingComponent />))
  );
}

export default HomePage;
