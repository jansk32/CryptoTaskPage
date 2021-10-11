import React from 'react'

function ErrorComponent(props) {

    return (
        <div>
            <h1>{props.error}</h1>
        </div>
    )
}

export default ErrorComponent;