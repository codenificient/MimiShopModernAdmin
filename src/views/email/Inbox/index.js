import React from 'react';
import EmailActions from 'src/components/UI/Email/EmailActions';
import EmaiList from '../email';
import './style.css';
import { msgs } from './userEmails';

export default function Inbox(props) {
	// const [ read, setRead ] = useState(false);

	const icons = [ 'cil-star' ];

	return (
		<React.Fragment>
			<div className="flexRowMsg darkerBg">
				<EmailActions />
				<div className="rightHand ml-2 normalBg outline mb-2">
					<EmaiList icons={icons} emails={msgs} />
				</div>
			</div>
		</React.Fragment>
	);
}
