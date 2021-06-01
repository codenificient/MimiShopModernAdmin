import React from 'react';
import ChatList from 'src/components/UI/Email/Chats';
import { conversations } from './chatList';
import './style.css';

export default function Chats(props) {
	const icons = [ 'cil-star' ];
	// console.log(`From Chat`, { contacts });
	// const [ messages, setMessages ] = useState([]);

	// useEffect(async () => {
	// 	const msg = await axiosInstance.get('https://my.api.mockaroo.com/user_chats_schema.json?key=37f692d0');
	// 	await setMessages(msg.data);
	// 	console.log({ msg });
	// }, []);

	// // let contactList = JSON.stringify(messages);

	// console.log({ messages });
	// // console.log({ contactList });

	return (
		<React.Fragment>
			<div className="flexRowChat darkerBg">
				<ChatList contacts={conversations} />
				<div className="rightHand ml-2 normalBg outline mb-2 light">
					<p className="chat-container p-3 black">Sélectionner une Conversation</p>
				</div>
			</div>
		</React.Fragment>
	);
}
