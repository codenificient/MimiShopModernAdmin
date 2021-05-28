import CIcon from '@coreui/icons-react';
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Attachment from 'src/components/UI/Email/Attachments';
import EmailActions from 'src/components/UI/Email/EmailActions';
import EmaiList from '../email';
import NewMessage from '../NewMessage';
import OutgoingMessages from '../Out';
import { formatDate3 } from 'src/urlConfig';
import { msgs } from '../Inbox/userEmails';
import './style.css';
import Input from 'src/components/UI/Input';

function EmailDetails(props) {
	const msg = msgs.find((msg) => msg.id.toString() === props.match.params.id);

	return (
		<React.Fragment>
			<div className="flexRowMsg darkerBg">
				<EmailActions />

				<div className="rightHand ml-2 mb-1 normalBg outline">
					<div className="cards-body">
						{/* <div className="pt-3 pl-3 white">
							<IconList iconList={iconList} style={{ width: '480px', padding: '13px' }} />
						</div> */}
						<div className="email-title mt-2 mb-5">
							<div className="w97 ml2 pt-4 mr-4 borderBtm lightGrey2">
								<Input
									type="email"
									label="Destinataire"
									value={msg.name ? `${msg.name} - [${msg.email}]` : ''}
									placeholder="couriel de votre destinataire"
								/>
								<Input
									type="text"
									label="Sujet"
									value={`Re: ${msg.subject}`}
									placeholder="sujet du couriel"
								/>
							</div>
						</div>
						<div>
							<textarea
								type="text"
								label="Subject"
								rows="20"
								style={{ padding: '15px', margin: '2px 30px', width: '97%' }}
								placeholder="Contenu de votre message"
							/>
						</div>
						<div className="mt-4 mb-5 ml-5">
							<ButtonGroup>
								<Button className="btn155 mr-4" variant="outline-info">
									<CIcon name="cil-share-all" />&nbsp;&nbsp;Envoyer
								</Button>
								<Button className="btn155" variant="outline-success">
									<CIcon name="cil-transfer" />&nbsp;&nbsp;Sauvegarder
								</Button>
							</ButtonGroup>
						</div>
						<div className="emailContainer borderTop w95 ml2 pt-4 mr-4  ">
							<div className="flexRow m-4 bold email-user ">
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

							<div className="email-body email-text w95 pb-4 mr-4">
								<p className="white">{msg.body}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default EmailDetails;
