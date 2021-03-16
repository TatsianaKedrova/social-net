import React from 'react'

type HelloMessagePropsType = {
    message: string
}

const HelloMessage:React.FC<HelloMessagePropsType> = (props) => {
    return (
        <div>
            <h3>{props.message}</h3>
        </div>
    )
}

export default HelloMessage;