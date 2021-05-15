import React from 'react';

function EmailTitle(props) {
	return (
		<div className="subjectContainer w97 mr-4 borderBtm">
			<h5 className="email-text email-subject">{props.subject}</h5>
		</div>
	);
}

export default EmailTitle;
