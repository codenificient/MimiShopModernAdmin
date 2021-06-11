import { CLink } from '@coreui/react';
import React from 'react';
import { Button } from 'react-bootstrap';
import { formatDate5 } from 'src/urlConfig';
import './style.css';

function ChatList(props) {
	return (
		<React.Fragment>
			<div className="leftHand outline" {...props}>
				<div className="card400">
					<div className="cards-body normalBg p-2">
						<div className="vcenter pt-3 mb-3">
							<CLink to="/messages/chats/newchat">
								<Button className="btn220 h50 " variant="danger">
									Nouvelle Conversation
								</Button>
							</CLink>
						</div>
						{props.contacts ? (
							props.contacts.map((action, index) => (
								<a href={`/messages/chats/${action.id}`} key={index} className="pt-2 chats">
									<div className={`chat-user-container mb-2 p-2 secondary`}>
										<div className="mr-3 image-container">
											{<img size={'xl'} src={action.avatr} />}
										</div>
										<div className="chat-user-date">
											<span className="chat-user mt-1">{action.name}</span>
											<span className="chat-date">
												{formatDate5(action.messages[index % 10].i)}
											</span>
										</div>
									</div>
									<span className="chat-preview text-truncate">{action.messages[index % 10].r}</span>
								</a>
							))
						) : (
							<p className="vcenter">Initiez une Conversation</p>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ChatList;
