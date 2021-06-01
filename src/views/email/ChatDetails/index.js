import { CButton } from '@coreui/react';
import React from 'react';
import ChatBody from 'src/components/UI/Email/ChatBody';
import ChatList from 'src/components/UI/Email/Chats';
import Input from 'src/components/UI/Input';
import { conversations } from '../Chats/chatList';
import './style.css';

export default function ChatDetails(props) {
	// const [ messages, setMessages ] = useState(msgs);

	// useEffect(async () => {
	// 	const msg = await axiosInstance.get('https://my.api.mockaroo.com/user_chats_schema.json?key=37f692d0');
	// 	await setMessages(msg.data);
	// 	// console.log({ msg });
	// }, []);

	// let msgId = props.location.pathname.split('/')[3];
	// // console.log({ msgId });

	const contact = conversations.find((contact) => contact.id === props.location.pathname.split('/')[3]);

	// console.log(`From ChatDetails`, { contacts });
	// console.log({ contact });

	return (
		<React.Fragment>
			<div className="flexRowChat darkerBg">
				<ChatList contacts={conversations} />
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
						<p className="vcenter light p-3">Selectioner une Conversation</p>
					)}

					<div className="dark flexRow chatapp">
						<Input type="text" placeholder="écrire un méssage" />
						<CButton className="chat-send" variant="outline">
							Envoyer
						</CButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
