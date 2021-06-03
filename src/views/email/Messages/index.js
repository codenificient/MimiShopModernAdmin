import React from 'react';
import NewModal from 'src/components/UI/Modal';
import Inbox from '../Inbox';
import NewMessage from '../NewMessage';
import './style.css';

export default function Messages(props) {
	// const [ activeKey, setActiveKey ] = useState(1);
	// console.log({ activeKey });

	return (
		<React.Fragment>
			<Inbox />
		</React.Fragment>
	);
}
