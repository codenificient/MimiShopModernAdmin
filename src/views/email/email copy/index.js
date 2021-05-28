import CIcon from '@coreui/icons-react';
import React from 'react';
import { formatDate3 } from 'src/urlConfig';

function Email(props) {
	return (
		<React.Fragment>
			{props.emails &&
				props.emails.map((msg, index) => (
					<a key={index} href={`/messages/emaildetails/${msg.id}`} className="c-message ">
						<div className="c-message-details pt-2">
							<div className="c-message-headers sa darkenBg">
								<span className="anchorLeft">{props.icon && <CIcon name="cil-star" />}</span>
								<span className="floatLeft bold accent">
									{props.direction} {msg.name}
								</span>
								<span className="floatCenter38 bold accent">Sujet: {msg.subject}</span>
								<span className="floatRight bold accent">{formatDate3(msg.date)}</span>
								<div className="email-text p-5">{msg.body}</div>
							</div>
						</div>
					</a>
				))}
		</React.Fragment>
	);
}

export default Email;

{
	/* <div className="pt-3 pl-3 white">
	<IconList iconList={iconList} style={{ width: '480px', padding: '13px' }} />
</div> */
}
