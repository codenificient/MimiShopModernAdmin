import {
	CBadge,
	CCard,
	CCardBody,
	CCardFooter,
	CCardHeader,
	CCol,
	CDataTable,
	CFormControl,
	CInputGroup,
	CInputGroupText,
	CRow
} from '@coreui/react';
import React, { useState } from 'react';
import { Col, FormControl, Row } from 'react-bootstrap';
import { MdInput } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'src/components/UI/Input';
import MainChartExample from 'src/views/charts/MainChartExample';
import './style.css';

export default function Messages(props) {
	const allpages = useSelector((state) => state.page.allpages);

	return (
		<React.Fragment>
			<h2 style={{ margin: '3rem' }}>Nouveau Couriel</h2>

			<CCard>
				{/* <CCardHeader>Envoyer Un Message</CCardHeader> */}
				<CCardBody>
					<Input type="email" label="Receiver" placeholder="email du destinataire" />
          <Input type="text" label="Subject" placeholder="sujet du couriel" />
          <label>Message</label><br></br>
					<textarea type="text" label="Subject" rows="5" style={{ padding: '10px', width: '100%'}} placeholder="contenu de votre message" />
				</CCardBody>

				<CCardFooter className="darkenBg" align="center">
					Created By
				</CCardFooter>
			</CCard>
		</React.Fragment>
	);
}
