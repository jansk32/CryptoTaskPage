import React, {Component} from 'react'
// import greenArrow from './green-arrow.png'
// import redArrow from './red-arrow.jpg'

class CryptoList extends Component {
    constructor(props){
        super(props);
        this.state = this.props.coin
    }


    render() {
        return(
                    <tr style={{borderTop: "1px black solid", textAlign: "center"}}>
                        <td><img src={this.state.image} alt="coin logo" style={{width:"40%"}} /></td>
                        <td><h1>{this.state.name}</h1></td>
                        <td><h3><b>{this.state.current_price}</b></h3></td>
                        <td><h3><b>{this.state.market_cap}</b></h3></td>
                        <td><h3><b>{this.state.total_volume}</b></h3></td>
                        <td><h3><b>{this.state.price_change_24h} ({this.state.price_change_percentage_24h}%)</b></h3></td>
                        <td><h3><b>{this.state.circulating_supply}</b></h3></td>
                    </tr>
        );
    }

}

export default CryptoList;