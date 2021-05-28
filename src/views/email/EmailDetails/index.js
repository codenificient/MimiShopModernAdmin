import CIcon from '@coreui/icons-react';
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Attachment from 'src/components/UI/Email/Attachments';
import EmailActions from 'src/components/UI/Email/EmailActions';
import { formatDate3 } from 'src/urlConfig';
import { msgs } from '../Inbox/userEmails';
import './style.css';

function EmailDetails(props) {
	const msg = msgs.find((msg) => msg.id.toString() === props.match.params.id);

	return (
		<React.Fragment>
			<div className="flexRowMsg darkerBg">
				<div className="leftHand">
					<EmailActions />
				</div>

				<div className="rightHand ml-2 normalBg outline mb-1">
					<div className="cards-body">
						<div className="email-title mt-2 mb-5">
							<div className="w95 ml2 pt-4 mr-4 borderBtm">
								<h5 className="email-text email-subject">{msg.subject}</h5>
							</div>
						</div>
						<div className="emailContainer">
							<div className="flexRow m-4 bold email-user">
								<div className="d-block">
									<div className="recipient">
										<div className="image-container">
											<img src={msg.avatar} alt={msg.avatar} />
										</div>
										<span className="user-name read">{msg.name}</span>

										<span className="user-email">Couriel: {msg.email}</span>
									</div>
								</div>

								<span className="floatRight textLight pr-4">{formatDate3(msg.date)}</span>
							</div>

							<div className="email-body email-text w95 ml2 pb-4 mr-4 borderBtm">
								<p className="white">{msg.body}</p>
							</div>
						</div>
						<div>{msg.attachments && <Attachment attachments={msg.attachments} />}</div>
						<div className="mt-4 mb-4 ml-5">
							<ButtonGroup>
								<Link to={`/messages/reply/${msg.id}`}>
									<Button className="btn mr-3" variant="outline-info">
										<CIcon name="cil-share-all" />&nbsp;&nbsp;Répondre
									</Button>
								</Link>

								<Link>
									<Button className="btn" variant="outline-secondary">
										<CIcon name="cil-transfer" />&nbsp;&nbsp;Transférer
									</Button>
								</Link>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default EmailDetails;
