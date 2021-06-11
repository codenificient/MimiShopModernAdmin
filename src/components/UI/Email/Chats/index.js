import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDate5 } from 'src/urlConfig';
import './style.css';

function ChatList(props) {
	return (
		<React.Fragment>
			<div className="leftHand outline normalBg">
				<div className="card400">
					<div className="vcenter pt-4 mb-2">
						<Link to="/messages/chats/newchat">
							<Button className="btn220 h50" variant="danger">
								Nouvelle Conversation
							</Button>
						</Link>
					</div>

					<div className="cards-body normalBg p-2">
						{props.contacts ? (
							props.contacts.map((action, index) => (
								<Link variant="link" to={`/messages/chats/${action.id}`} key={index} className="chats">
									<div className={`chat-user-container mb-2 p-2 secondary`}>
										<div className="mr-3 image-container">
											{<img size={'xl'} src={action.avatr} />}
										</div>
										<div className="chat-user-date">
											<span className="chat-user">{action.name}</span>
											<span className="chat-date">
												{formatDate5(action.messages[index % 10].i)}
											</span>
										</div>
									</div>
									<span className="chat-preview text-truncate">{action.messages[index % 10].r}</span>
								</Link>
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
