import CIcon from '@coreui/icons-react';
import {
	CBreadcrumbRouter,
	CHeader,
	CHeaderBrand,
	CHeaderNav,
	CHeaderNavItem,
	CHeaderNavLink,
	CLink,
	CSubheader,
	CToggler
} from '@coreui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions';
import mimiGold from '../assets/icons/golden.png';
// routes config
import routes from '../routes';
import { TheHeaderDropdown, TheHeaderDropdownMssg, TheHeaderDropdownNotif, TheHeaderDropdownTasks } from './index';

const TheHeader = () => {
	const dispatch = useDispatch();
	const sidebarShow = useSelector((state) => state.nav.sidebarShow);

	const logout = (e) => {
		e.preventDefault();
		dispatch(signout());
	};

	const toggleSidebar = () => {
		const val = [ true, 'responsive' ].includes(sidebarShow) ? false : 'responsive';
		dispatch({ type: 'set', sidebarShow: val });
	};

	const toggleSidebarMobile = () => {
		const val = [ false, 'responsive' ].includes(sidebarShow) ? true : 'responsive';
		dispatch({ type: 'set', sidebarShow: val });
	};

	return (
		<CHeader withSubheader>
			<CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} />
			<CToggler inHeader className="ml-3 d-md-down-none" onClick={toggleSidebar} />
			<CHeaderBrand className="mx-auto d-lg-none" to="/">
				<CIcon name="logo" src={mimiGold} alt="Logo" />
			</CHeaderBrand>

			<CHeaderNav className="d-md-down-none mr-auto">
				<CHeaderNavItem className="px-3">
					<CHeaderNavLink to="/profile">Profile</CHeaderNavLink>
				</CHeaderNavItem>
				<CHeaderNavItem className="px-3">
					<CHeaderNavLink to="/partners">Parténaires</CHeaderNavLink>
				</CHeaderNavItem>
				<CHeaderNavItem className="px-3">
					<CHeaderNavLink to="/settings">Paramètres</CHeaderNavLink>
				</CHeaderNavItem>
			</CHeaderNav>

			<CHeaderNav className="px-3">
				<TheHeaderDropdownNotif />
				<TheHeaderDropdownTasks />
				<TheHeaderDropdownMssg />
				<TheHeaderDropdown />
			</CHeaderNav>

			<CSubheader className="px-3 justify-content-between">
				<CBreadcrumbRouter className="border-0 c-subheader-nav m-0 px-0 px-md-3" routes={routes} />
				<div className="d-md-down-none mfe-2 c-subheader-nav">
					<CLink className="c-subheader-nav-link" to="/messages">
						<CIcon name="cil-speech" alt="Settings" />&nbsp;&nbsp;Messages
					</CLink>

					<CLink className="c-subheader-nav-link" onClick={logout}>
						<CIcon name="cil-settings" alt="Logout" />&nbsp;&nbsp;Déconnection
					</CLink>
				</div>
			</CSubheader>
		</CHeader>
	);
};

export default TheHeader;
