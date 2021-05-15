import React from 'react';

function EmailTitle(props) {
	return (
		<div className="subjectContainer w9 ml2 pt-4 mr-4 borderBtm">
			<h5 className="email-text email-subject">{props.subject}</h5>
		</div>
	);
}

export default EmailTitle;
