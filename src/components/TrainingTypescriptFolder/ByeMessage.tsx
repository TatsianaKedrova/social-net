import React from 'react'

type ByeMessagePropsType = {
    message: string
}

const ByeMessage:React.FC<ByeMessagePropsType> = (props) => {
    return (
        <div>
            <h3>{props.message}</h3>
        </div>
    )
}

export default ByeMessage
