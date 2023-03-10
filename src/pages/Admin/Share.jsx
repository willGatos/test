import axios from "axios"
import { useState,useEffect } from "react"
import Cards from "../../Components/Cards"
function Share() {

    const [todayCinemas, setTodayCinemas] = useState([])
    useEffect(()=>{
        const accessToken = localStorage.getItem("accessToken")
        axios.get( "http://localhost:3001/events/getEventsToday",
            {headers: {'Authorization': 'Bearer '+ accessToken}})
        .then((e)=>{
            setTodayCinemas(e.data)
        })
    },[])

    return (
        <div>
            <a target="_blank" href={`https://wa.me/+58419139?text=${todayCinemas.map(e=> {
                const startDate = new Date(e.time.continuesEventsStartDay);
                const endDate = new Date(e.time.continuesEventsEndDay);
                const eventDay = new Date(e.time.eventsDays)
                return (`π${e.exactDirection.placeToSetEvent}π%0aπ${e.name}π%0aπ${e.time.startHour}%0aπ${e.time.continuesEventsStartDay ? `${startDate.getDate()}/${startDate.getMonth() + 1} - ${endDate.getDate()}/${endDate.getMonth() + 1}` :`${eventDay.getDate()}/${eventDay.getMonth() + 1}`}%0aπ§RevisiΓ³n%0a${e.reviewLink}%0a%0a`)
            })}`}>
                Share WhatsApp
            </a>
            
            <div>
                {todayCinemas.map(cine => (
                    <Cards
                        service={cine}
                        serviceOrEvent={"event"}
                    />
                ))}
            </div>
        </div>
    )
}

export default Share