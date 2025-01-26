import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get(`http://your-backend-url/api/event-details/${id}`)
            .then((response) => {
                setEvent(response.data);
            })
            .catch((error) => {
                console.error('Error fetching event details:', error);
            });
    }, [id]);

    if (!event) return <p>Loading...</p>;

    return (
        <div className="event-details">
            <h2>{event.event_name}</h2>
            <p>Location: {event.location}</p>
            <p>Start Date: {event.start_date}</p>
            <p>End Date: {event.end_date}</p>
            <p>Start Time: {event.start_time}</p>
            <p>End Time: {event.end_time}</p>
            <p>Rate: {event.rate}</p>
            <p>Description: {event.description}</p>
            {event.photo && <img src={`http://your-backend-url/storage/${event.photo}`} alt={event.event_name} />}
        </div>
    );
};

export default EventDetails;
