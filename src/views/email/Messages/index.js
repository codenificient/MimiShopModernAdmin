import { CCard, CCardBody, CButtonGroup, CCardHeader } from '@coreui/react';
import React, { useState } from 'react';
import MessageArchive from '../Archive';
import Inbox from '../Inbox';
import NewMessage from '../NewMessage';
import OutgoingMessages from '../Out';
import './style.css';

export default function Messages(props) {
	const [ activeKey, setActiveKey ] = useState(1);
	// console.log({ activeKey });

	return (
		<React.Fragment>
			<Inbox />
	
		</React.Fragment>
	);
}
