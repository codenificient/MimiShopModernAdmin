import { CCard, CCardBody, CCardFooter } from '@coreui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Email from '../email';
import './style.css';
import { msgs } from './userEmails';

export default function Inbox(props) {
	const allpages = useSelector((state) => state.page.allpages);
	const [ read, setRead ] = useState(false);

	const iconList = [
		'cil-envelope-closed',
		'cil-star',
		'cil-text',
		'cil-text-size',
		'cil-underline',
		'cil-underline',
		'cil-bookmark',
		'cil-share',
		'cil-share-all',
		'cil-trash',
		'cil-tags',
		'cil-indent-decrease',
		'cil-indent-increase',
		'cil-settings'
	];

	return (
		<React.Fragment>
			<h2 className="textLight" style={{ margin: '1rem' }}>
				Boite de Reception
			</h2>

			<CCard>
				<CCardBody>
					<Email iconList={iconList} icon direction={'From: '} emails={msgs} />
				</CCardBody>

				<CCardFooter className="normalBg sb no-border" align="center">
					Liste complete
				</CCardFooter>
			</CCard>
		</React.Fragment>
	);
}
