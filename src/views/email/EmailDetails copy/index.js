import CIcon from '@coreui/icons-react';
import { CCol, CRow, CCard, CCardBody, CBadge } from '@coreui/react';
import React from 'react';
import { msgs } from '../Inbox/userEmails';

function EmailDetails(props) {
	const msg = msgs.find((msg) => msg.id.toString() === props.match.params.id);

	const inboxActions = [
		{
			icon: 'cil-inbox',
			action: 'Inbox',
			color: 'info',
			count: 900
		},
		{
			icon: 'cil-star',
			action: 'Starred',
			color: 'warning',
			count: 7
		},
		{
			icon: 'cil-alarm',
			action: 'Snoozed',
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
			color: 'primary'
		},
		{
			icon: 'cil-warning',
			action: 'Junk',
			color: 'warning'
		}
	];

	const Labels = [
		{
			Label: 'A Regler',
			color: 'warning'
		},
		{
			Label: 'Rembourser',
			color: 'warning'
		},
		{
			Label: 'Commandes',
			color: 'warning'
		},
		{
			Label: 'Partenaire',
			color: 'warning'
		},
	];

	return (
		<React.Fragment>
			<div className="col-md-12">
				<CCard>
					<CCardBody>
						<div className="emailActions">
							{inboxActions &&
								inboxActions.map((action, index) => (
									<div key={index} className="c-message-headers  mt-2">
										<div className={`c-message-actions mb-2 p-2 secondary`}>
											<span className={`mr-2 l1 ${action.color}`}>
												{<CIcon size={'l'} name={action.icon} />}
											</span>
											<span className="floatCenter">{action.action}</span>
											<span className="r1 posa">
												{
													<CBadge shape="pill" color={action.color}>
														{action.count}
													</CBadge>
												}
											</span>
										</div>
									</div>
								))}
							<h5>Labels</h5>
						</div>
						<div id="emailContainer" className="pl-1 normalBg">
							<div className="c-message mb-4 ">
								<h1>Float Right</h1>
								<div className="c-message-details pt-2">
									<div className="c-message-headers sa darkenBg">
										<span className="anchorLeft">{props.icon && <CIcon name="cil-star" />}</span>
										<span className="floatLeft bold accent">
											{props.direction} {msg.name}
										</span>
										<span className="floatCenter38 bold accent">Sujet: {msg.subject}</span>
										<span className="floatRight bold accent">{msg.date}</span>
										<div className="flexRow p-5">{msg.body}</div>
									</div>
								</div>
							</div>
						</div>
					</CCardBody>
				</CCard>
			</div>
		</React.Fragment>
	);
}

export default EmailDetails;
