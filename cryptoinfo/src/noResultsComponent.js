import React from 'react'
import cryptoHeader from './cryptoheader.jpeg'

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
            <div style={{backgroundImage: `url(${cryptoHeader})`, height: "100%"}}>
                <center className="problemPage">
                <h1>There seems to be a problem</h1>
                <h1>{props.errorMessage}</h1>
                <h1>Please check your connection and try again...</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiSHJVnvVxKLiLbOen7dubuWq8H7Za8jjyw&usqp=CAU" alt="cool coin" />
                <p style={{fontSize: "20px"}}><i>In the meantime, here's a cool bitcoin for your trouble</i></p>
                </center>
            </div>
        )
    }
}

export default ErrorComponent;