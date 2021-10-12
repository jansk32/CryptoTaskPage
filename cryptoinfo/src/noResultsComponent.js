import React from 'react'

function ErrorComponent(props) {
    if(props.error === "noResult"){
    return (
        <tr>
            <td colSpan="7">
                <center>
                <h1>NO RESULTS FOUND!</h1>
                <p>Try another search word...</p>
                </center>
                </td>
        </tr>
    )
    }else{
        return (
            <div>
                <h1>There seems to be a problem</h1>
                <h1>{props.errorMessage}</h1>
                <h1>Please try to check your connection...</h1>
                <img src="https://image.shutterstock.com/image-vector/sad-coin-character-wallpaper-free-260nw-1465036271.jpg" alt="sad coin" />
            </div>
        )
    }
}

export default ErrorComponent;