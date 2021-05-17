import { CCard, CCardBody, CCardFooter } from '@coreui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Input from 'src/components/UI/Input';

export default function MessageArchive(props) {

	return (
		<React.Fragment>
			<h2 className="textLight" style={{ margin: '1rem' }}>
				Archives de Messages
			</h2>

			<CCard>
				{/* <CCardHeader>Envoyer Un Message</CCardHeader> */}
				<CCardBody>
					<Input type="email" label="Receiver" placeholder="email du destinataire" />
					<Input type="text" label="Subject" placeholder="sujet du couriel" />
					<label>Message</label>
					<br />
					<textarea
						type="text"
						label="Subject"
						rows="5"
						style={{ padding: '10px', width: '100%' }}
						placeholder="contenu de votre message"
					/>
				</CCardBody>

				<CCardFooter className="darkenBg" align="center">
					Created By
				</CCardFooter>
			</CCard>
		</React.Fragment>
	);
}
