import React from 'react';
import { formatDate6 } from 'src/urlConfig';
import './style.css';

export default function ChatBody(props) {
	console.log({ props });
	return (
		<React.Fragment>
				{props.msgs &&
					props.msgs.map((msg, index) => (
						<div key={index} className="chat-bubbles">
							<div className="outgoing">
								<div className="chat-bubble">{msg.s}</div>
								<div className="sent-time">{formatDate6(msg.o)}</div>
							</div>

							<div className="incoming">
								<div className="chat-bubble">{msg.r}</div>
								<div className="received-time">{formatDate6(msg.i)}</div>
							</div>
						</div>
					))}
		</React.Fragment>
	);
}
