import { CButton, CButtonGroup } from '@coreui/react';
import React from 'react';
import EmailActions from 'src/components/UI/Email/EmailActions';
import Input from 'src/components/UI/Input';
import './style.css';

export default function NewMessage(props) {
	return (
		<React.Fragment>
			<div className="flexRowMsg darkerBg">
				<div className="leftHand">
					<EmailActions />
				</div>
				<div className="rightHand ml-2 normalBg outline mb-1">
					<div className="">
						<h5 className="textLight mt-1" style={{ textAlign: 'center' }}>
							Composez un Nouveau Couriel
						</h5>
						<div className="m-2 lightGrey2">
							<Input type="email" label="Destinataire" placeholder="email du destinataire" />
							<Input type="text" label="Sujet" placeholder="sujet du couriel" />
							<div>
								<label>Méssage</label>
								<textarea
									type="text"
									label="Subject"
									rows="19"
									style={{ padding: '15px', width: '100%' }}
									placeholder="Contenu de votre message"
								/>
							</div>
							<div>
								<CButtonGroup className="sa mt-2">
									<CButton className="mr-4 btn120" color="primary">
										Envoyer
									</CButton>
									<CButton className="mr-4 btn120" color="success">
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
			</div>
		</React.Fragment>
	);
}
