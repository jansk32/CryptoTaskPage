import React from 'react';
import renderer from 'react-test-renderer';
import CryptoList from '../cryptoListComponent';
import { BrowserRouter } from 'react-router-dom';

var testData = {}

beforeAll(() => {
    testData =  {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        current_price: 75137,
        market_cap: 1413864723414,
        market_cap_rank: 1,
        fully_diluted_valuation: 1575749581808,
        total_volume: 57833378966,
        high_24h: 78153,
        low_24h: 73946,
        price_change_24h: -2373.550462723797,
        price_change_percentage_24h: -3.06224,
        market_cap_change_24h: -46420847277.604004,
        market_cap_change_percentage_24h: -3.17889,
        circulating_supply: 18842562.0,
        total_supply: 21000000.0,
        max_supply: 21000000.0,
        ath: 84381,
        ath_change_percentage: -10.70555,
        ath_date: "2021-04-14T06:52:46.198Z",
        atl: 72.61,
        atl_change_percentage: 103671.37128,
        atl_date: "2013-07-05T00:00:00.000Z",
        roi: null,
        last_updated: "2021-10-13T12:59:16.747Z"
    }
})

test("Testing a List of coin page", () => {
    const component = renderer.create(
        <BrowserRouter>
        <CryptoList coin={testData}/>
        </BrowserRouter>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
