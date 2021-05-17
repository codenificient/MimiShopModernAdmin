import CIcon from '@coreui/icons-react';
import {
	CButton,
	CCard,
	CCardBody,
	CCardGroup,
	CCol,
	CContainer,
	CForm,
	CInput,
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
	CRow
} from '@coreui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from './src/actions';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	// eslint-disable-next-line
	const [ error, setError ] = useState('');
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const userLogin = (e) => {
		e.preventDefault();
		const user = {
			email,
			password
		};

		dispatch(login(user));
	};

	if (auth.authenticate) {
		return <Redirect to={`/`} />;
	}

	return (
		<div className="c-app c-default-layout darkenBg flex-row align-items-center">
			<CContainer>
				<CRow className="welcome-text text-main">
					<h1>Page de Connection Admin</h1>
				</CRow>

				<CRow className="justify-content-center">
					<CCol md="8">
						<CCardGroup>
							<CCard className="p-4">
								<CCardBody>
									<CForm onSubmit={userLogin}>
										<h1>Connection</h1>
										<p className="text-muted">Connectez vous à votre compte</p>
										<CInputGroup className="mb-3">
											<CInputGroupPrepend>
												<CInputGroupText>
													<CIcon name="cil-user" />
												</CInputGroupText>
											</CInputGroupPrepend>
											<CInput
												type="email"
												placeholder="Votre Email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												autoComplete="email"
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
												placeholder="Mot de Passe"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												autoComplete="current-password"
											/>
										</CInputGroup>
										<CRow>
											<CCol xs="6">
												<CButton type="submit" color="primary" className="px-4">
													Connection
												</CButton>
											</CCol>
											<CCol xs="6" className="text-right">
												<CButton color="link" className="px-0">
													Besoin d'aide?
												</CButton>
											</CCol>
										</CRow>
									</CForm>
								</CCardBody>
							</CCard>
							<CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
								<CCardBody className="text-center">
									<div>
										<h2>Créer Compte</h2>
										<p className="mt-5 mb-5">
											Si c'est votre première fois, veuillez créer un compte pour utiliser notre
											service.
										</p>
										<Link to="/register">
											<CButton className="mt-1 btn-behance cib-youtube" active tabIndex={-1}>
												Nouveau Compte!
											</CButton>
										</Link>
									</div>
								</CCardBody>
							</CCard>
						</CCardGroup>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	);
};

export default Login;
