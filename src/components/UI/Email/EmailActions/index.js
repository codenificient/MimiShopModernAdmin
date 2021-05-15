import CIcon from '@coreui/icons-react';
import { CBadge } from '@coreui/react';
import React from 'react';
import { Button } from 'react-bootstrap';

function EmailActions(props) {
	const inboxActions = [
		{
			icon: 'cil-inbox',
			action: 'Reception',
			color: 'info',
			count: 900
		},
		{
			icon: 'cil-star',
			action: 'Étoiles',
			color: 'warning',
			count: 7
		},
		{
			icon: 'cil-alarm',
			action: 'Différé',
			color: 'dark'
		},
		{
			icon: 'cil-notes',
			action: 'Brouillons',
			color: 'success',
			count: 24
		},
		{
			icon: 'cil-trash',
			action: 'Supprimé',
			color: 'danger'
		},
		{
			icon: 'cil-tag',
			action: 'Important',
			color: 'violet'
		},
		{
			icon: 'cil-warning',
			action: 'Junk',
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
					<div className="cards-body normalBg">
					<div className="emailActions pl-2 pt-3 pb-3">
						<div className="mt-2 mb-5">
								<Button className="btn200" variant="danger">Compose</Button>
					</div>
							{inboxActions &&
								inboxActions.map((action, index) => (
									<div key={index} className="mt-2">
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
									</div>
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
