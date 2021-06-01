
import React, { useEffect, useState } from 'react';
import axiosInstance from 'src/helpers/axios';

function UserChats() {
  	const [ messages, setMessages ] = useState([]);

// 	useEffect(async () => {
// 		const msg = await axiosInstance.get('https://my.api.mockaroo.com/user_chats_schema.json?key=37f692d0');
// 		await setMessages(msg.data);
// 		// console.log({ msg });
//   }, []);

}

export default UserChats;
