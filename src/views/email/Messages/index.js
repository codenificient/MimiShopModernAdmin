import { CCard, CCardBody, CButtonGroup, CCardHeader } from '@coreui/react';
import React, { useState } from 'react';
import MessageArchive from '../Archive';
import Inbox from '../Inbox';
import NewMessage from '../NewMessage';
import OutgoingMessages from '../Out';
import './style.css';

export default function Messages(props) {
	const [ activeKey, setActiveKey ] = useState(1);
	// console.log({ activeKey });

	return (
		<CCard>
			<CCardHeader className="lightenBg c-header-nav-item">
				<ul class="nav nav-tabs" style={{ borderBottom: 'none' }}>
					<li class="nav-item">
						<button class="nav-link btn220 active btn-info" data-toggle="tab" href="#home">
							Boite de Reception
						</button>
					</li>
					<li class="nav-item ml-3">
						<button class="nav-link btn-success btn220" data-toggle="tab" href="#menu1">
							Nouveau Méssage
						</button>
					</li>
					<li class="nav-item ml-3">
						<button class="nav-link btn-primary btn220" data-toggle="tab" href="#menu2">
							Messages Envoyés
						</button>
					</li>
					<li class="nav-item ml-3">
						<button class="nav-link  btn-warning btn220" data-toggle="tab" href="#menu3">
							Archives de Messages
						</button>
					</li>
				</ul>
			</CCardHeader>
			<CCardBody>
				<div class="tab-content">
					<div id="home" class="container tab-pane active">
						<Inbox />
					</div>
					<div id="menu1" class="container tab-pane fade">
						<NewMessage />
					</div>
					<div id="menu2" class="container tab-pane fade">
						<OutgoingMessages />
					</div>
					<div id="menu3" class="container tab-pane fade">
						<MessageArchive />
					</div>
				</div>
			</CCardBody>
		</CCard>
	);
}
