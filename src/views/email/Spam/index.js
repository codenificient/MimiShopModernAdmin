import React from 'react';
import EmailActions from 'src/components/UI/Email/EmailActions';
import EmaiList from '../email';
import './style.css';
import { msgs } from '../Inbox/userEmails';

export default function Spam(props) {
	// const allpages = useSelector((state) => state.page.allpages);
	const icons = [ 'cil-star' ];

	return (
		<React.Fragment>
			<h2 className="textLight" style={{ margin: '1rem' }}>
				Brouillons des Messages
			</h2>

			<div className="flexRowMsg darkerBg">
				<EmailActions />
				<div className="rightHand ml-2 normalBg outline mb-2">
					<EmaiList icons={icons} emails={msgs} />
				</div>
			</div>
		</React.Fragment>
	);
}
