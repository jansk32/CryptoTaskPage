import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DetailsPage(props) {

    var [coin, setCoin] = useState({})
    var [priceChangeTime, setPriceChangeTime] = useState({})

    // to get coin data (replace bitcoin with actual coin id)
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/bitcoin", {crossDomain: true})
          .then(res => {
            //console.log(res.data)
            setCoin(res.data)
          })
          .catch(err => console.log(err))
        },[])


    //trying to make the image as background for coin (align left and large)
    return(
        <div>
            <div>
            <img src={coin.image.large} alt="coin background" style={{alignSelf: "left"}}/>
            <h1>{coin.name}</h1>
            {coin.description.en}
            </div>
            <h1>Market Details:</h1>
            <table>
                <tr>
            <td><h3>Current Price:<b>AUD {coin.market_data.current_price.aud}</b></h3></td>
            <td><h3>High 24h:<b>AUD {coin.market_data.high_24h.aud}</b></h3></td>
            <td><h3>Low 24h:<b>AUD {coin.market_data.low_24h.aud}</b></h3></td>
            <td><h3>Price Change 24h (%):<b>{coin.market_data.price_change_percentage_24h_in_currency.aud} %</b></h3></td>
            <td><h3>Price Change 7d (%):<b>{coin.market_data.price_change_percentage_7d_in_currency.aud} %</b></h3></td>
            <td><h3>Price Change 200d (%):<b>{coin.market_data.price_change_percentage_200d_in_currency.aud} %</b></h3></td>
            <td><h3>Price Change 1y (%):<b>{coin.market_data.price_change_percentage_1y_in_currency.aud} %</b></h3></td>
            <td><h3>Total Supply:<b>{coin.market_data.total_supply}</b></h3></td>
            <td><h3>Market Cap:<b>AUD {coin.market_data.market_cap.aud}</b></h3></td>
            </tr>
            </table>
        </div>
    )
}

export default DetailsPage;