import CIcon from '@coreui/icons-react';
import React from 'react';

function Attachment(props) {
	return (
		<div className="subjectContainer w97 borderTop p15 ml2">
			<h4 className="email-text email-subject mb-4">Attachments</h4>
			<div className="flexRow attachall">
				{props.attachments &&
					props.attachments.map((attachment, index) => (
						<div key={index} className="sa outline attach p-2 mr-2">
							<div className="mr-2 left">
								<div className={`c-avatar-text ${attachment.color}`}>{attachment.ext}</div>
							</div>
							<div className="middleText">
								<div className="mr-2">
									<span className="ml-5 pt-4 textLight">{attachment.title}</span>

									<div className="ml-5 light">{attachment.size}</div>
								</div>
							</div>

							<span className="email-text attachicon right">
								<CIcon size="l" name="cil-cloud-download" />
							</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Attachment;
