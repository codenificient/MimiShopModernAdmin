import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter } from '@coreui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Input from 'src/components/UI/Input';
import './style.css';

export default function NewMessage(props) {
	const allpages = useSelector((state) => state.page.allpages);

	return (
		<React.Fragment>
			<h2 className="textLight" style={{ margin: '1rem' }}>
				Nouveau Couriel
			</h2>

			<CCard>
				<CCardBody>
					<Input type="email" label="Destinataire" placeholder="email du destinataire" />
					<Input type="text" label="Sujet" placeholder="sujet du couriel" />
					<label>Méssage</label>
					<br />
					<textarea
						type="text"
						label="Subject"
						rows="5"
						style={{ padding: '10px', width: '100%' }}
						placeholder="contenu de votre message"
					/>
				</CCardBody>

				<CCardFooter className="normalBg sb no-border" align="center">
					<CButtonGroup className="sb">
						<CButton className="mr-4 btn120" color="primary">Envoyer</CButton>
						<CButton className="mr-4 btn120" color="dark">Brouillon</CButton>
						<CButton className="mr-4 btn120" color="danger">Supprimer</CButton>
					</CButtonGroup>
				</CCardFooter>
			</CCard>
		</React.Fragment>
	);
}
