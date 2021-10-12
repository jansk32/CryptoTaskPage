import React from 'react'
import load from './loading_logo.png'
function LoadingComponent() {
    return <div>
        <center style={{paddingTop: "10%"}}>
        <img className="loadingLogo" src={load} alt="Loading..." style={{width: "20%", height: "20%"}}/>
        <h1>Loading...</h1>
        </center>
    </div>
}

export default LoadingComponent;