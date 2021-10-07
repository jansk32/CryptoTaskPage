import React, {Component} from 'react'
import greenArrow from './green-arrow.png'
import redArrow from './red-arrow.jpg'

class CryptoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            coins: [ {
                "id": "bitcoin",
                "symbol": "btc",
                "name": "Bitcoin",
                "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                "current_price": 74543,
                "market_cap": 1400604523511,
                "market_cap_rank": 1,
                "fully_diluted_valuation": 1561419588087,
                "total_volume": 63739084881,
                "high_24h": 76513,
                "low_24h": 70963,
                "price_change_24h": 3580.34,
                "price_change_percentage_24h": 5.04535,
                "market_cap_change_24h": 65576117082,
                "market_cap_change_percentage_24h": 4.91196,
                "circulating_supply": 18837150.0,
                "total_supply": 21000000.0,
                "max_supply": 21000000.0,
                "ath": 84381,
                "ath_change_percentage": -11.96368,
                "ath_date": "2021-04-14T06:52:46.198Z",
                "atl": 72.61,
                "atl_change_percentage": 102209.26874,
                "atl_date": "2013-07-05T00:00:00.000Z",
                "roi": null,
                "last_updated": "2021-10-07T11:58:09.016Z"
            },
            {
                "id": "ethereum",
                "symbol": "eth",
                "name": "Ethereum",
                "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                "current_price": 4912.15,
                "market_cap": 576858660458,
                "market_cap_rank": 2,
                "fully_diluted_valuation": null,
                "total_volume": 33832448869,
                "high_24h": 5011.32,
                "low_24h": 4682.01,
                "price_change_24h": 221.93,
                "price_change_percentage_24h": 4.7317,
                "market_cap_change_24h": 24611383949,
                "market_cap_change_percentage_24h": 4.45659,
                "circulating_supply": 117829127.999,
                "total_supply": null,
                "max_supply": null,
                "ath": 5616.82,
                "ath_change_percentage": -12.87567,
                "ath_date": "2021-05-12T14:41:48.623Z",
                "atl": 0.596152,
                "atl_change_percentage": 820767.41892,
                "atl_date": "2015-10-20T00:00:00.000Z",
                "roi": {
                    "times": 87.27298418094364,
                    "currency": "btc",
                    "percentage": 8727.298418094364
                },
                "last_updated": "2021-10-07T11:58:02.922Z"
            },
            {
                "id": "cardano",
                "symbol": "ada",
                "name": "Cardano",
                "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
                "current_price": 3.18,
                "market_cap": 101683310922,
                "market_cap_rank": 3,
                "fully_diluted_valuation": 142696103182,
                "total_volume": 4027866939,
                "high_24h": 3.22,
                "low_24h": 2.96,
                "price_change_24h": 0.22479,
                "price_change_percentage_24h": 7.60656,
                "market_cap_change_24h": 6808317635,
                "market_cap_change_percentage_24h": 7.17609,
                "circulating_supply": 32066390668.4135,
                "total_supply": 45000000000.0,
                "max_supply": 45000000000.0,
                "ath": 4.19,
                "ath_change_percentage": -24.2639,
                "ath_date": "2021-09-02T06:00:10.474Z",
                "atl": 0.02765234,
                "atl_change_percentage": 11368.82105,
                "atl_date": "2017-11-02T00:00:00.000Z",
                "roi": null,
                "last_updated": "2021-10-07T11:58:17.992Z"
            },
            {
                "id": "tether",
                "symbol": "usdt",
                "name": "Tether",
                "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
                "current_price": 1.37,
                "market_cap": 94641829186,
                "market_cap_rank": 4,
                "fully_diluted_valuation": null,
                "total_volume": 126867919791,
                "high_24h": 1.41,
                "low_24h": 1.37,
                "price_change_24h": -0.010552543583,
                "price_change_percentage_24h": -0.76237,
                "market_cap_change_24h": -666687733.3037567,
                "market_cap_change_percentage_24h": -0.6995,
                "circulating_supply": 68916070575.3911,
                "total_supply": 68916070575.3911,
                "max_supply": null,
                "ath": 1.81,
                "ath_change_percentage": -24.02624,
                "ath_date": "2020-03-19T03:10:25.782Z",
                "atl": 0.76805,
                "atl_change_percentage": 78.76896,
                "atl_date": "2015-03-02T00:00:00.000Z",
                "roi": null,
                "last_updated": "2021-10-07T11:56:08.504Z"
            },
            {
                "id": "binancecoin",
                "symbol": "bnb",
                "name": "Binance Coin",
                "image": "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
                "current_price": 607.92,
                "market_cap": 93824259800,
                "market_cap_rank": 5,
                "fully_diluted_valuation": 103538572108,
                "total_volume": 3016159335,
                "high_24h": 617.18,
                "low_24h": 583.2,
                "price_change_24h": 24.22,
                "price_change_percentage_24h": 4.14859,
                "market_cap_change_24h": 3577930726,
                "market_cap_change_percentage_24h": 3.96463,
                "circulating_supply": 154533651.9,
                "total_supply": 170533651.9,
                "max_supply": 170533651.9,
                "ath": 877.6,
                "ath_change_percentage": -30.81135,
                "ath_date": "2021-05-12T04:03:36.688Z",
                "atl": 0.05053,
                "atl_change_percentage": 1201550.91062,
                "atl_date": "2017-10-19T00:00:00.000Z",
                "roi": null,
                "last_updated": "2021-10-07T11:57:54.034Z"
            }]
        }
    }

    componentDidMount(){
        //this.setState({coins: this.props.coins})
    }


    render() {
        return(
            <div>
                {this.state.coins.map((c) => {return(
                    <div>
                        <img src={c.image} alt="coin logo" />
                        <h1>{c.name}</h1>
                        <h3>Current Price: <b>{c.current_price}</b></h3>
                        <h3>Market Cap: <b>{c.market_cap}</b></h3>
                        <h3>Total Volume: <b>{c.total_volume}</b></h3>
                        <h3>Price Change 24h: <b>{c.price_change_24h} ({c.price_change_percentage_24h}%)</b><img src={c.price_change_percentage_24h <= 0 ? redArrow : greenArrow }></img></h3>
                        <h3>Circulating Supply: <b>{c.circulating_supply}</b></h3>
                    </div>
                )})}
            </div>
        );
    }

}

export default CryptoList;