import React from 'react';
import ChatBody from 'src/components/UI/Email/ChatBody';
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
					<h1>Chats</h1>
					<ChatBody />
				</div>
			</div>
		</React.Fragment>
	);
}