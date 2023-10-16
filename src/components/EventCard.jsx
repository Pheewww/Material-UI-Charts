import React from 'react'


const EventCard = ({ event }) => {
	let type = "";
	// Determine the event details based on the event type
	if (event.type === "sent") type = "Sent:";
	else type = "Completed:";
	return (
		<div className="card">
			<div className="action">
				<h3>{type}</h3>
				<p>{event.timestamp}</p>
			</div>
			<div className="description" style={{ padding: "16px 0 0 0" }}>
				<p style={{ padding: "8px 0 0 16px" }}>{event.description}</p>
			</div>
		</div>
	);
};

export default EventCard
