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
			<div className="flexRowMsg p-2 darkerBg">
				<EmailActions />
				<div className="rightHand ml-3 normalBg outline mb-5">
					<EmaiList icons={icons} emails={msgs} />
				</div>

				{/* <div className="row p-2 darkerBg">
				<EmailActions />
				<div className="col-sm-9 ml-3 normalBg outline">
					<div className="cards-body">
						<div className="ml-3">
							<IconList style={{ width: '480px', padding: '15px' }} iconList={iconList} />
						</div>
						<div className="borderTop secondary">
							<EmaiList icons={icons} emails={msgs} />
						</div>
					</div>
				</div>
			</div> */}
			</div>
		</React.Fragment>
	);
}
