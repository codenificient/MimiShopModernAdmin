import CIcon from '@coreui/icons-react';
import { CBadge } from '@coreui/react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Inbox from 'src/views/email/Inbox';
import OutgoingMessages from 'src/views/email/Out';

function EmailActions(props) {
	const [ dispComp, setDispComp ] = useState(<Inbox />);

	const renderComp = (str) => {
		switch (str) {
			case 'Réception':
				setDispComp(<Inbox />);
			case 'Étoiles':
				setDispComp(<OutgoingMessages />);
			case 'zip':
			case 'ZIP':
				return 'infoBg';
			case 'JPG':
			case 'jpg':
				return 'dangerBg';
		}
	};

	const inboxActions = [
		{
			icon: 'cil-inbox',
			href: '/messages',
			action: 'Réception',
			color: 'info',
			count: 527
		},
		{
			icon: 'cil-star',
			action: 'Étoiles',
			href: '/messages/starred',
			color: 'warning',
			count: 7
		},
		{
			icon: 'cil-notes',
			action: 'Brouillons',
			href: '/messages/drafts',
			color: 'success',
			count: 24
		},
		{
			icon: 'cil-transfer',
			href: '/messages/sent',
			action: 'Envoyés',
			color: 'secondary'
		},
		{
			icon: 'cil-trash',
			action: 'Corbeille',
			href: '/messages/archived',
			color: 'danger'
		},
		{
			icon: 'cil-tags',
			action: 'Important',
			href: '/messages/important',
			color: 'violet'
		},
		{
			icon: 'cil-warning',
			action: 'Spams',
			href: '/messages/junk',
			color: 'warning'
		}
	];

	const labels = [
		{
			label: 'A Regler',
			color: 'primary'
		},
		{
			label: 'Rembourser',
			color: 'danger'
		},
		{
			label: 'Commandes',
			color: 'warning'
		},
		{
			label: 'Réglé',
			color: 'success'
		},
		{
			label: 'Partenaire',
			color: 'info'
		}
	];

	return (
		<React.Fragment>
			<div className="card240">
				<div className="cards-body normalBg outline">
					<div className="emailActions p-3">
						<div className="m-2 pb-4 black">
							<a href="/messages/newemail">
								<Button className="btn200 " variant="danger">
									Composer
								</Button>
							</a>
						</div>
						{inboxActions &&
							inboxActions.map((action, index) => (
								<a href={action.href} key={index} className="pt-4">
									<div className={`c-message-actions mb-2 p-2 secondary`}>
										<span className={`mr-3 ${action.color}`}>
											{<CIcon size={'l'} name={action.icon} />}
										</span>
										<span className="">{action.action}</span>
										<span className="right pl-3">
											{
												<CBadge shape="pill" color={action.color}>
													{action.count}
												</CBadge>
											}
										</span>
									</div>
								</a>
							))}
						<h6 className="textLight bold mt-5 mb-3">Labels</h6>
						{labels &&
							labels.map((label, index) => (
								<div key={index} className="c-message-actions mb-2 p-2 secondary">
									<div>
										<span className={`mr-3 ${label.color}`}>
											<CIcon size={'l'} name="cib-discover" />{' '}
										</span>
										<span>{label.label}</span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default EmailActions;


import React from 'react';
import { Button } from 'react-bootstrap';

function EmailActions(props) {
	const inboxActions = [
		{
			icon: 'cil-inbox',
			href: '/messages',
			action: 'Réception',
			color: 'info',
			count: 527
		},
		{
			icon: 'cil-star',
			action: 'Étoiles',
			href: '/messages/starred',
			color: 'warning',
			count: 7
		},
		{
			icon: 'cil-notes',
			action: 'Brouillons',
			href: '/messages/drafts',
			color: 'success',
			count: 24
		},
		{
			icon: 'cil-transfer',
			href: '/messages/sent',
			action: 'Envoyés',
			color: 'secondary'
		},
		{
			icon: 'cil-trash',
			action: 'Corbeille',
			href: '/messages/archived',
			color: 'danger'
		},
		{
			icon: 'cil-tags',
			action: 'Important',
			href: '/messages/important',
			color: 'violet'
		},
		{
			icon: 'cil-warning',
			action: 'Spams',
			href: '/messages/junk',
			color: 'warning'
		}
	];

	const labels = [
		{
			label: 'A Regler',
			color: 'primary'
		},
		{
			label: 'Rembourser',
			color: 'danger'
		},
		{
			label: 'Commandes',
			color: 'warning'
		},
		{
			label: 'Réglé',
			color: 'success'
		},
		{
			label: 'Partenaire',
			color: 'info'
		}
	];

	const icons = [ 'cil-star' ];

	return (
		<React.Fragment>
			<div className="card240">
				<div className="cards-body normalBg outline">
					<div className="emailActions p-3">
						<div className="m-2 pb-4 black">
							<a href="/messages/#v-pills-profile-tab">
								<Button className="btn200 " variant="danger">
									Composer
								</Button>
							</a>
						</div>
						<div
							class="nav flex-column nav-pills"
							id="v-pills-tab"
							role="tablist"
							aria-orientation="vertical"
						>
							<a
								class="nav-link active"
								id="v-pills-home-tab"
								data-toggle="pill"
								href="#v-pills-home"
								role="tab"
								aria-controls="v-pills-home"
								aria-selected="true"
							>
								Reception
							</a>
							<a
								class="nav-link"
								id="v-pills-profile-tab"
								data-toggle="pill"
								href="#v-pills-profile"
								role="tab"
								aria-controls="v-pills-profile"
								aria-selected="false"
							>
								Nouveau Message
							</a>
							<a
								class="nav-link"
								id="v-pills-messages-tab"
								data-toggle="pill"
								href="#v-pills-messages"
								role="tab"
								aria-controls="v-pills-messages"
								aria-selected="false"
							>
								Envoyés
							</a>
							<a
								class="nav-link"
								id="v-pills-settings-tab"
								data-toggle="pill"
								href="#v-pills-settings"
								role="tab"
								aria-controls="v-pills-settings"
								aria-selected="false"
							>
								EXTRAS
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default EmailActions;
