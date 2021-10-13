import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';

class CryptoList extends Component {
    constructor(props){
        super(props);
        this.state = this.props.coin
    }


    render() {
        return(
                    
                    <tr style={{borderTop: "1px black solid", textAlign: "center"}}>
                        
                        <td><Link to="details" params={{coinId: this.state.id}} ><img src={this.state.image} alt="coin logo" style={{width:"70%"}} /></Link></td>
                        <td><Link to={`details/${this.state.id}`}><h1 className="coinNameTable">{this.state.name}</h1></Link></td>
                        <td><h3><b>{this.state.current_price}</b></h3></td>
                        <td><h3><b>{this.state.market_cap}</b></h3></td>
                        <td><h3><b>{this.state.total_volume}</b></h3></td>
                        <td><h3 style={{color: this.state.price_change_percentage_24h >= 0 ? "green" : "red"}}><b>{this.state.price_change_24h} ({this.state.price_change_percentage_24h}%)</b></h3></td>
                        <td><h3><b>{this.state.circulating_supply}</b></h3></td>
                        
                    </tr>
                    
        );
    }

}

export default CryptoList;