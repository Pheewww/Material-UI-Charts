import React from "react";

const OtherEventCard = ({ event }) => {
	let type = "";
	// Determine the event details based on the event type
	if (event.type === "viewed") type = "Viewed:";
	else if (event.type === "signed") type = "Signed:";
	else if (event.type === "attached") type = "Attached:";
	else type = "Reminder:";
	return (
		<div className="card">
			<div className="action">
				<h3>{type}</h3>
				<p>{event.timestamp}</p>
			</div>
			<div className="description">
				<div className="otherEventDesc1">
					<p>{event.description}</p>
				</div>
				<div className="otherEventDesc2">
					<p style={{ border: "solid 1px #ccc", width: "75%" }}>
						{event.email}
					</p>
					<p
						style={{
							border: "solid 1px #ccc",
							width: "25%",
						}}
					>
						{"IP: " + event.ip}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OtherEventCard;
