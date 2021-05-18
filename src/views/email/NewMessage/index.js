import { CButton, CButtonGroup } from '@coreui/react';
import React from 'react';
import EmailActions from 'src/components/UI/Email/EmailActions';
import Input from 'src/components/UI/Input';
import './style.css';

export default function NewMessage(props) {

	return (
		<React.Fragment>
			<div className="row p-2 darkerBg">
				<EmailActions />

				<div className="col-sm-9 ml-3 normalBg outline">
					<div className="cards-body ">
						<h5 className="textLight" style={{ margin: '1rem' }}>
							Nouveau Couriel
						</h5>
						<div className="mt-4 dark">
							<Input type="email" label="Destinataire" placeholder="email du destinataire" />
							<Input type="text" label="Sujet" placeholder="sujet du couriel" />
							<label>Méssage</label>
							<br />
							<textarea
								type="text"
								label="Subject"
								rows="16"
								style={{ padding: '15px', width: '100%' }}
								placeholder="Contenu de votre message"
							/>

							<CButtonGroup className="sb mt-4">
								<CButton className="mr-4 btn120" color="primary">
									Envoyer
								</CButton>
								<CButton className="mr-4 btn120" color="dark">
									Brouillon
								</CButton>
								<CButton className="btn120" color="danger">
									Supprimer
								</CButton>
							</CButtonGroup>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
