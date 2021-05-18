import CIcon from '@coreui/icons-react';
import React from 'react';
import { formatDate2 } from 'src/urlConfig';
import './style.css';

function EmaiList(props) {
	return (
		<React.Fragment>
			{props.emails &&
				props.emails.map((msg, index) => (
					<div className="c-message-details m-5 pt-2 flexRow">
						<span className="mr-2">
							<input type="checkbox" className="left" />
						</span>
						<span className="icons pl-1">
							<CIcon name="cil-star" />
						</span>
						<a key={index} href={`/messages/emaildetails/${msg.id}`} className="c-message">
							<div className="">
								<span className="mr-3 bold email-text pl1">
									<CIcon name="cil-user" />&nbsp;&nbsp;{msg.name}
								</span>
								<span className="email-text text-center">
									<CIcon name="cil-envelope-closed" />&nbsp;&nbsp;{msg.subject}
								</span>
								<span className="r2 email-text pl2 posa">{formatDate2(msg.date)}</span>
							</div>
						</a>
					</div>
				))}
		</React.Fragment>
	);
}

export default EmaiList;
