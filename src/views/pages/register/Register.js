import CIcon from '@coreui/icons-react';
import {
	CButton,
	CCard,
	CCardBody,
	CCardFooter,
	CCol,
	CContainer,
	CForm,
	CImg,
	CInput,
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
	CRow
} from '@coreui/react';
import React from 'react';
import Logo7 from 'src/assets/icons/shopLogo7.png';

const Register = () => {
	return (
		<div className="c-app darkenBg c-default-layout flex-row align-items-center">
			<CContainer>
				<div
					style={{
						height: '200px',
						maxWidth: '500px',
						textAlign: 'center',
						margin: '1rem auto',
						objectFit: 'contain',
						overflow: 'hidden'
					}}
				>
					<CImg src={Logo7} alt={Logo7} style={{ width: '100%' }} />
				</div>
				<CRow className="welcome-text text-main">
					<h1>Page de Creation Admin</h1>
				</CRow>
				<CRow className="justify-content-center">
					<CCol md="10" lg="9" xl="6">
						<CCard className="mx-4">
							<CCardBody className="p-4">
								<CForm>
									<h1>Créer votre Compte</h1>
									<p className="text-muted">Créer un Nouveau Compte Administratif</p>
									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name="cil-user" />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput type="text" placeholder="Prénom" autoComplete="firstName" />
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name="cil-user-follow" />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput type="text" placeholder="Nom" autoComplete="lastName" />
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>@</CInputGroupText>
										</CInputGroupPrepend>
										<CInput type="text" placeholder="Email" autoComplete="email" />
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name="cil-lock-locked" />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput
											type="password"
											placeholder="Mot de Passe"
											autoComplete="new-password"
										/>
									</CInputGroup>
									<CInputGroup className="mb-4">
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name="cil-lock-locked" />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput
											type="password"
											placeholder="Répeter Mot de Passe"
											autoComplete="new-password"
										/>
									</CInputGroup>
									<CButton color="success" block>
										Create Account
									</CButton>
								</CForm>
							</CCardBody>
							<CCardFooter className="p-4 c-main">
								<CRow>
									<CCol xs="12" sm="6">
										<CButton className="btn-warning mb-1" block>
											<span>Google</span>
										</CButton>
									</CCol>
									<CCol xs="12" sm="6">
										<CButton className="btn-twitter mb-1" block>
											<span>twitter</span>
										</CButton>
									</CCol>
								</CRow>
							</CCardFooter>
						</CCard>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	);
};

export default Register;
