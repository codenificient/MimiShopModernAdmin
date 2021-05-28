import { CButton } from '@coreui/react';
import React from 'react';
import ChatBody from 'src/components/UI/Email/ChatBody';
import ChatList from 'src/components/UI/Email/Chats';
import Input from 'src/components/UI/Input';
import { contacts } from '../Chats/userChats';
import './style.css';

export default function ChatDetails(props) {
	const contact = contacts.find((contact) => contact.id === props.location.pathname.split('/')[3]);

	// console.log(`From ChatDetails`, { contacts });
	console.log({ contact });
	return (
		<React.Fragment>
			<div className="flexRowMsg darkerBg">
				<ChatList contacts={contacts} />
				<div className="rightHand ml-2 normalBg outline mb-2">
					{contact ? (
						<div className="chat-container">
							<div className="flexRow">
								<div className="m-3 image-container">
									<img src={contact.avatar} alt="" />
								</div>
								<span className="user light mt-3 ft2 bold">{contact.name}</span>
							</div>
							<div className="chat-messages mb-5">
								<ChatBody msgs={contact.messages} />
							</div>
						</div>
					) : (
						<p className="vcenter">Selectioner une Conversation</p>
					)}

					<div className="lightGrey2 flexRow chatapp">
						<Input type="text" placeholder="écrire un méssage" />
						<CButton className="chat-send" variant="outline" color="info">
							Envoyer
						</CButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
