import CIcon from '@coreui/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate2 } from 'src/urlConfig';
import './style.css';

function EmaiList(props) {
	return (
		<React.Fragment>
			{props.emails &&
				props.emails.map((msg, index) => (
					<div className="message-details">
						<div className="icons">
							<span className="mr-2">
								<input type="checkbox" className="left" />
							</span>
							<span className="icon">
								<CIcon name="cil-star" />
							</span>
						</div>
						<Link key={index} to={`/messages/emaildetails/${msg.id}`} className="c-message email-text">
							<div className="author">
								<span className="">
									<CIcon name="cil-user" />&nbsp;&nbsp;{msg.name}
								</span>
							</div>

							<div className="subject">
								<span>
									<CIcon name="cil-envelope-closed" />&nbsp;&nbsp;{msg.subject}
								</span>
							</div>

							<div className="date">
								<span className="">{formatDate2(msg.date)}</span>
							</div>
						</Link>
					</div>
				))}
		</React.Fragment>
	);
}

export default EmaiList;
