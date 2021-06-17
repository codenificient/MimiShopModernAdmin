import CIcon from '@coreui/icons-react'
import {
	CButton,
	CCard,
	CCardBody, CCol,
	CContainer,
	CForm,
	CImg,
	CInput,
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
	CRow
} from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signup } from 'src/actions'
import Logo7 from 'src/assets/icons/shopLogo7.png'


const Register = () => {
	const [ email, setEmail ] = useState('');
	const [ passwordOne, setPasswordOne ] = useState('');
	const [ passwordTwo, setPasswordTwo ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	// eslint-disable-next-line
	const [ error, setError ] = useState('');
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const adminSignup = (e) => {
		e.preventDefault();
		const user = {
			firstName,
			lastName,
			email,
			password: passwordOne
		};
		dispatch(signup(user));
	};

	if (auth.authenticate) {
		return <Redirect to={`/`} />;
	}

	return (
		<div className="c-app darkenBg c-default-layout flex-row align-items-center">
			<CContainer>
				<div
						style={{
						maxWidth: '300px',
						textAlign: 'center',
						margin: '2rem auto',
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
								<CForm onSubmit={adminSignup}>
									<h1>Créer votre Compte</h1>
									<p className="text-muted">Créer un Nouveau Compte Administratif</p>
									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name="cil-user" />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput type="text" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="firstName" />
									</CInputGroup>
									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name="cil-user-follow" />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput type="text" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)}  autoComplete="lastName" />
									</CInputGroup>

									<CInputGroup className="mb-3">
										<CInputGroupPrepend>
											<CInputGroupText>@</CInputGroupText>
										</CInputGroupPrepend>
										<CInput type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  autoComplete="email" />
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
											value={passwordOne} 
											onChange={(e) => setPasswordOne(e.target.value)} 
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
											value={passwordTwo} 
											onChange={(e) => setPasswordTwo(e.target.value)} 
											placeholder="Répeter Mot de Passe"
											autoComplete="new-password"
										/>
									</CInputGroup>
									<CButton type="submit" color="success" block>
										Créer nouveau Compte
									</CButton>
								</CForm>
							</CCardBody>
							{/* <CCardFooter className="p-4 c-main">
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
							</CCardFooter> */}
						</CCard>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	);
};

export default Register;
