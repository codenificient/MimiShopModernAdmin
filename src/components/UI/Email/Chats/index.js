import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDate5, shorten } from 'src/urlConfig';
import './style.css';

function ChatList(props) {
	return (
		<React.Fragment>
			<div className="leftHand">
				<div className="card400">
					<div className="cards-body normalBg outline p-2">
						<div className="vcenter pt-3 mb-3">
							<Link to="/messages/chats/newchat">
								<Button className="btn220 h50 " variant="danger">
									Nouvelle Conversation
								</Button>
							</Link>
						</div>
						{props.contacts ? (
							props.contacts.map((action, index) => (
								<Link to={`/messages/chats/${action.id}`} key={index} className="pt-2 chats">
									<div className={`chat-user-container mb-2 p-2 secondary`}>
										<div className="mr-3 image-container">
											{<img size={'xl'} src={action.avatar} />}
										</div>
										<div className="chat-user-date">
											<span className="chat-user mt-1">{action.name}</span>
											<span className="chat-date">
												{formatDate5(action.messages[index % 10].i)}
											</span>
										</div>
									</div>
									<span className="chat-preview text-truncate">
										{action.messages[index % 10].r}
									</span>
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
