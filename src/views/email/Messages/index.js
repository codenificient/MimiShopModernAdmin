import {
	CCard,
	CCardBody,
	CCardFooter,
	CCardHeader,
	CNav,
	CNavItem,
	CNavLink,
	CTabContent,
	CTabPane
} from '@coreui/react';
import React, { useState } from 'react';
import './style.css';

export default function Messages(props) {
  const [activeKey, setActiveKey] = useState(1);
  console.log({ activeKey });
	return (
		<CCard>
			<CCardHeader className="bgClear">
				<CNav variant="pills">
					<CNavItem>
						<CNavLink active={activeKey == 1} onClick={() => setActiveKey(1)}>
							Boite de Reception
						</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink  active={activeKey == 2} onClick={() => setActiveKey(2)}>
							Nouveau Message
						</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink active={activeKey == 3} onClick={() => setActiveKey(3)}>
							Messages Envoyés
						</CNavLink>
					</CNavItem>
					<CNavItem>
						<CNavLink  active={activeKey == 4} color="danger" onClick={() => setActiveKey(4)}>
							Archives des Messages
						</CNavLink>
					</CNavItem>
				</CNav>
			</CCardHeader>
			<CCardBody>
				<CTabContent>
					<CTabPane visible={activeKey == 1}>
						<h1>Inbox</h1>
					</CTabPane>
					<CTabPane visible={activeKey == 2}>
						<h1>New message</h1>
					</CTabPane>
					<CTabPane visible={activeKey == 3}>
						<h1>Outgoing</h1>
					</CTabPane>
					<CTabPane visible={activeKey == 4}>
						<h1>Archives</h1>
					</CTabPane>
				</CTabContent>
			</CCardBody>
			<CCardFooter className="bgClear" align="center">
				Created By
			</CCardFooter>
		</CCard>
	);
}
