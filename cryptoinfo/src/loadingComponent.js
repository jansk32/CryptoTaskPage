import React from 'react'
import load from './loading_logo.png'
function loadingComponent() {
    return <div>
        <img className="App-logo" src={load} alt="Loading..." style={{width: "20%", height: "20%"}}/>
        <h1>Loading...</h1>
    </div>
}

export default loadingComponent;