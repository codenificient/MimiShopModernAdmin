import React from 'react';
import ChatList from 'src/components/UI/Email/Chats';
import './style.css';
import { contacts } from './userChats';

export default function Chats(props) {
	const icons = [ 'cil-star' ];
	// console.log(`From Chat`, { contacts });
	return (
		<React.Fragment>
			<div className="flexRowChat darkerBg">
				<ChatList contacts={contacts} />
				<div className="rightHand ml-2 normalBg outline mb-2">
					<p className="chat-container ml2 mt2">Selectionner une Conversation</p>
				</div>
			</div>
		</React.Fragment>
	);
}

