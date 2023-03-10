import React from 'react'
import useCheckToken from '../Hooks/useCheckToken'

function MakeReservation({toSendBody, setSuccess}) {
    const setApiCall = useCheckToken(()=>{})

    const sendReservation = ()=>{
        setApiCall("post", "http://localhost:3001/services/denounce",toSendBody )
        .then(()=>{
            setSuccess(true)
        })
        .catch(()=>{
            setSuccess(false)
        })
    }

    return (
        <>
            <button onClick={()=>{sendReservation()}} className="p-2vw">Reservar ya mismo</button>
        </>
    )
}

export default MakeReservation
