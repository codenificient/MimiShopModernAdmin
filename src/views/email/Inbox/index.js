import React from 'react';
import EmailActions from 'src/components/UI/Email/EmailActions';
import EmaiList from '../email';
import NewMessage from '../NewMessage';
import OutgoingMessages from '../Out';
import './style.css';
import { msgs } from './userEmails';

export default function Inbox(props) {
	// const [ read, setRead ] = useState(false);

	const icons = [ 'cil-star' ];

	return (
		<React.Fragment>
			<div className="row p-2 darkerBg">

			<EmailActions />
			<div className="col-md-9 ml-3 normalBg outline mb-5">
				<div className="cards-body">
					<div className="borderTop secondary">
						<div class="tab-content" id="v-pills-tabContent">
							<div
								class="tab-pane fade show active"
								id="v-pills-home"
								role="tabpanel"
								aria-labelledby="v-pills-home-tab"
							>
								<EmaiList icons={icons} emails={msgs} />
							</div>
							<div
								class="tab-pane fade"
								id="v-pills-profile"
								role="tabpanel"
								aria-labelledby="v-pills-profile-tab"
							>
								<NewMessage />
							</div>
							<div
								class="tab-pane fade"
								id="v-pills-messages"
								role="tabpanel"
								aria-labelledby="v-pills-messages-tab"
							>
								<OutgoingMessages />
							</div>
							<div
								class="tab-pane fade"
								id="v-pills-settings"
								role="tabpanel"
								aria-labelledby="v-pills-settings-tab"
							>
								EXTRAS
							</div>
						</div>
					</div>
				</div>
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
