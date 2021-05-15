import { CCardFooter } from '@coreui/react';
import React, { useState } from 'react';
import EmailActions from 'src/components/UI/Email/EmailActions';
import IconList from 'src/components/UI/Email/IconList';
import EmaiList from '../email';
import './style.css';
import { msgs } from './userEmails';

export default function Inbox(props) {
	const [ read, setRead ] = useState(false);

	const icons = [ 'cil-star', 'cil-bookmark' ];

  	const iconList = [
		'cil-envelope-closed',
		'cil-star',
		'cil-bookmark',
		'cil-share',
		'cil-share-all',
		'cil-trash',
		'cil-tags',
		'cil-settings'
	];

	return (
		<React.Fragment>
			<div className="row p-2 darkerBg">
				<EmailActions />

				<div className="col-sm-9 ml-3 normalBg ">
          <div className="cards-body">
            <IconList style={{ width: '55%', padding: '15px' }} iconList={iconList} />
            <div className="borderTop p15">
						<EmaiList icons={icons} emails={msgs} />
            </div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
