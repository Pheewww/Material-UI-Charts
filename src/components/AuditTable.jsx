import React from "react";
import EventCard from "./EventCard";
import OtherEventCard from "./OtherEventCard";

const events = [
	{
		id: 1,
		type: "sent",
		timestamp: "Aug 21, 2023 09:53:26 UTC",
		user: "John Eick",
		description:
			"John Eick sent the document to John Eick (tofex30310@backva.com), smack (avinaashdhumal@gmail.com), simba (smichael111@myfreeserver.download).",
		// recipients: [
		// 	{ name: "John Eick", email: "tofex30310@backva.com" },
		// 	{ name: "smack", email: "avinaashdhumal@gmail.com" },
		// 	{ name: "simba", email: "smichael111@myfreeserver.download" },
		// ],
	},
	{
		id: 2,
		type: "viewed",
		timestamp: "Aug 21, 2023 09:53:34 UTC",
		email: "tofex30310@backva.com",
		description: "John Eick viewed the document.",
		ip: "106.210.237.207",
	},
	{
		id: 3,
		type: "reviewed",
		timestamp: "Aug 21, 2023 09:56:00 UTC",
		email: "tofex30310@backva.com",
		description: "John Eick reviewed the document.",
		ip: "106.210.237.207",
	},
	{
		id: 4,
		type: "reminder",
		timestamp: "Aug 21, 2023 09:56:00 UTC",
		email: "tofex30310@backva.com",
		description: "John Eick sent reminder to smack (avinaashdhumal@gmail.com).",
		recipient: { name: "smack", email: "avinaashdhumal@gmail.com" },
		ip: "106.210.237.207",
	},
	{
		id: 5,
		type: "viewed",
		timestamp: "Aug 21, 2023 09:57:43 UTC",
		email: "tofex30310@backva.com",
		description: "smack viewed the document.",
		ip: "106.210.237.207",
	},
	{
		id: 6,
		type: "attached",
		timestamp: "Aug 21, 2023 10:01:03 UTC",
		email: "avinaashdhumal@gmail.com",
		description:
			"smack attached _3f5dba40-58bb-4ecb-ac5a-5e732442e56d to the document.",
		attachmentId: "_3f5dba40-58bb-4ecb-ac5a-5e732442e56d",
		recipient: { name: "smack", email: "avinaashdhumal@gmail.com" },
		ip: "106.210.237.207",
	},
	{
		id: 7,
		type: "signed",
		timestamp: "Aug 21, 2023 10:07:59 UTC",
		email: "avinaashdhumal@gmail.com",
		description: "simba signed the document.",
		recipient: { name: "smack", email: "avinaashdhumal@gmail.com" },
		ip: "106.210.237.207",
	},
	{
		id: 8,
		type: "viewed",
		timestamp: "Aug 21, 2023 10:07:59 UTC",
		email: "avinaashdhumal@gmail.com",
		description: "simba viewed the document.",
		ip: "106.210.237.207",
	},
	{
		id: 9,
		type: "signed",
		timestamp: "Aug 21, 2023 10:09:39 UTC",
		email: "smichael111@myfreeserver.download",
		description: "simba signed the document.",
		recipient: { name: "simba", email: "smichael111@myfreeserver.download" },
		ip: "106.210.237.207",
	},
	{
		id: 10,
		type: "completed",
		timestamp: "Aug 21, 2023 10:10:40 UTC",
		user: "John Eick",
		description: "Document has been completed.",
	},
];

const AuditTable = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Audit Trial</h1>
			{events.map((event, index) => {
				if (event.type === "completed" || event.type === "sent")
					return <EventCard key={index} event={event} />;
				else return <OtherEventCard key={index} event={event} />;
			})}
			<div>
				<p style={{ textAlign: "center" }}>No more events to show</p>
			</div>
		</div>
	);
};

export default AuditTable;
