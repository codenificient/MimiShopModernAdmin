import CIcon from '@coreui/icons-react';
import React from 'react';
import { formatDate2 } from 'src/urlConfig';

function EmaiList(props) {
	return (
		<React.Fragment>
			{props.emails &&
				props.emails.map((msg, index) => (
					<a key={index} href={`/messages/emaildetails/${msg.id}`} className="c-message">
						<div className="c-message-details m-5 pt-2">
							{props.icons &&
								props.icons.map((icon) => (
									<span className="left icons mr-3">
										<CIcon name={icon} />
									</span>
								))}
							<span className="left ml-3 mr-3 bold email-text ">{msg.name}</span>
							<span className="right email-text ">{formatDate2(msg.date)}</span>
							<span className="email-text floatCenter ml-5 mr-4">{msg.subject}</span>
						</div>
					</a>
				))}
		</React.Fragment>
	);
}

export default EmaiList;
