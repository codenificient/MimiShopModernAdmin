import { CButton } from '@coreui/react';
import React from 'react';
import ChatBody from 'src/components/UI/Email/ChatBody';
import ChatList from 'src/components/UI/Email/Chats';
import Input from 'src/components/UI/Input';
import { contacts } from '../Chats/userChats';
import './style.css';

export default function ChatDetails(props) {
	const contact = contacts.find((contact) => contact.id === props.location.pathname.split('/')[3]);

	console.log(`From ChatDetails`, { contacts });
	console.log({ contact });
	return (
		<React.Fragment>
			<div className="flexRowMsg darkerBg">
				<ChatList contacts={contacts} />
				<div className="rightHand ml-2 normalBg outline mb-2">
					{contact ? (
						<div className="flexRow">
							<div className="m-3 image-container">
								<img src={contact.avatar} alt="" />
							</div>
							<span className="light mt-3 ft2 bold">{contact.name}</span>
						</div>
					) : (
						<p className="vcenter">Selectioner une Conversation</p>
					)}
					<div>
						{contact &&
							contact.messages.map((msg) => {
								<ChatBody msg={msg} />;
							})}
					</div>
					<div className="posa chat-input-box">
						<Input placeholder="écrire un méssage" />
						<CButton className="chat-send" color="outline-danger">
							Send
						</CButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
