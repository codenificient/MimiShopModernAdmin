import React from 'react';
import CIcon from '@coreui/icons-react';

function Email(props) {
	return (
		<React.Fragment>
			<div className="c-message mb-4 ">
				<span className="c-message-actions p-3 darkenBg sa">
					{props.iconList && props.iconList.map((name, index) => <span className="mr-4 ">{<CIcon size={'l'} name={name} />}</span>)}
				</span>
			</div>
			{props.emails && props.emails.map((msg, index) => (
				<a key={index} className="c-message ">
					<div className="c-message-details pt-2">
                        <div className="c-message-headers sb darkenBg">
                            <span className="anchorLeft">{ props.icon && <CIcon name="cil-star" />}</span>
							<span className="floatLeft">{props.direction} {msg.name}</span>
                            <span className="floatRight">{msg.date}</span>
                            <div className="flexRow p-5">{msg.body}</div>
						</div>
					</div>
				</a>
			))}
		</React.Fragment>
	);
}

export default Email;
