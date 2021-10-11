import React, {useEffect, useState} from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import axios from 'axios'

function DetailsPage(props) {

    var [coin, setCoin] = useState({})
    var [loaded, setLoaded] = useState(false)
    var [graphData, setGraphData] = useState([])
    var [priceChangeTime, setPriceChangeTime] = useState({})

    // to get coin data (replace bitcoin with actual coin id)
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/bitcoin", {crossDomain: true, params: {sparkline: true}})
          .then(res => {
            //console.log(res.data)
            setCoin(res.data)
            setLoaded(true)
            graphing(res.data)
          })
          .catch(err => console.log(err))
        },[])
    
    // Configure data sparklines to be used for graph
    function graphing(e) {
        var newArr = []
        var d = e.market_data.sparkline_7d.price;
        for (let i=1; i< d.length + 1; i++){
            newArr.push({
                x: i,
                y: d[i-1]
            })
        }
        setGraphData(newArr)
    }
    
    //trying to make the image as background for coin (align left and large)
    return(
        (loaded && <div>
            <div style={{backgroundColor: "cyan"}}>
            <div style={{ textAlign: "left", backgroundImage: 'url('+ coin.image.large+')', backgroundRepeat: 'no-repeat', backgroundPosition: 'cover'}}>
            <h1 style={{padding: '10%'}}>{coin.name}</h1>
            <p  style={{width: '70%', paddingLeft: "10%", paddingBottom: "10%"}}>{coin.description.en}</p>
            </div>
            </div>
            <h1>Market Details:</h1>
            <center>
            <table width="70%" style={{paddingBottom: "5%"}}>
                <tr>
                <th><h3>Current Price</h3></th>
                <th><h3>High 24h</h3></th>
                <th><h3>Low 24h:</h3></th>
                <th><h3>Price Change 24h (%):</h3></th>
                <th><h3>Price Change 7d (%):</h3></th>
                <th><h3>Price Change 200d (%):</h3></th>
                <th><h3>Price Change 1y (%):</h3></th>
                <th><h3>Total Supply:</h3></th>
                <th><h3>Market Cap:</h3></th>
                </tr>
                <tr>
            <td><b>AUD {coin.market_data.current_price.aud}</b></td>
            <td><b>AUD {coin.market_data.high_24h.aud}</b></td>
            <td><b>AUD {coin.market_data.low_24h.aud}</b></td>
            <td><b>{coin.market_data.price_change_percentage_24h_in_currency.aud} %</b></td>
            <td><b>{coin.market_data.price_change_percentage_7d_in_currency.aud} %</b></td>
            <td><b>{coin.market_data.price_change_percentage_200d_in_currency.aud} %</b></td>
            <td><b>{coin.market_data.price_change_percentage_1y_in_currency.aud} %</b></td>
            <td><b>{coin.market_data.total_supply}</b></td>
            <td><b>AUD {coin.market_data.market_cap.aud}</b></td>
            </tr>
            </table>
            <h1>Market Price over 7 days</h1>
            <XYPlot
                width={1000}
                height={500}
                >
                <HorizontalGridLines />
                <LineSeries
                    data={graphData}/>
                <XAxis title="time"/>
                <YAxis title="Price (AUD)"/>
                </XYPlot>
            </center>
        </div>)
    )
}

export default DetailsPage;