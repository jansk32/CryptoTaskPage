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
                <h1>{props.errorMessage}</h1>
                <h1>Please try again...</h1>
            </div>
        )
    }
}

export default ErrorComponent;