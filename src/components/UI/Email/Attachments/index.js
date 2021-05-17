import CIcon from '@coreui/icons-react';
import React from 'react';
import { shorten } from 'src/urlConfig';
import './attachment.css';

const styleExt = (str) => {
	switch (str) {
		case 'MP4':
		case 'mp4':
			return 'warningBg';
			break;
		case 'MP3':
		case 'mp3':
			return 'secondaryBg';
			break;
		case 'zip':
		case 'ZIP':
			return 'infoBg';
			break;
		case 'JPG':
		case 'jpg':
			return 'dangerBg';
			break;
		default:
			return 'primaryBg';
	}
};

function Attachment(props) {
	return (
		<div className="w95 ml2 pt-4 mr-4">
			<h5 className="email-text email-subject mb-4">Attachments</h5>
			<div className="flexRow attachall">
				{props.attachments &&
					props.attachments.map((attachment, index) => (
						<div key={index} className="sa outline attach p-2 mr-2">
							<div className="mr-5 left">
								<div className={`c-avatar-text m-1 ${styleExt(attachment.title.split('.')[1])}`}>
									{attachment.title.split('.')[1]}
								</div>
							</div>
							<div className="middleText">
								<div className="mr-2">
									<span className="ml-5 pt-4 attachment-title  textLight">
										{shorten(attachment.title.split('.')[0], 21) || shorten(attachment.title.split('.')[0], 21, '_')}
									</span>

									<div className="ml-5 light attachment-size">{attachment.size}</div>
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
