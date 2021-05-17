import CIcon from '@coreui/icons-react';
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Attachment from 'src/components/UI/Email/Attachments';
import EmailActions from 'src/components/UI/Email/EmailActions';
import { formatDate3 } from 'src/urlConfig';
import { msgs } from '../Inbox/userEmails';
import './style.css';

function EmailDetails(props) {
	const msg = msgs.find((msg) => msg.id.toString() === props.match.params.id);

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

	const iconList = [
		'cil-envelope-closed',
		'cil-star',
		'cil-bookmark',
		'cil-share',
		'cil-share-all',
		'cil-trash',
		'cil-tags',
		'cil-settings'
	];

	return (
		<React.Fragment>
			<div className="row p-2 darkerBg">
				<EmailActions />

				<div className="col-sm-9 ml-3 normalBg outline">
					<div className="cards-body">
						{/* <div className="pt-3 pl-3 white">
							<IconList iconList={iconList} style={{ width: '480px', padding: '13px' }} />
						</div> */}
						<div className="email-title mt-2 mb-5">
							<div className="w95 ml2 pt-4 mr-4 borderBtm">
								<h5 className="email-text email-subject">{msg.subject}</h5>
							</div>
						</div>
						<div className="emailContainer">
							<div className="flexRow m-4 bold email-user">
								<div className="d-block">
									<div className="recipient">
										<div className="image-container">
											<img src={msg.avatar} alt={msg.avatar} />
										</div>
										<span className="user-name read">{msg.name}</span>

										<span className="user-email">Couriel: {msg.email}</span>
									</div>
								</div>

								<span className="floatRight textLight pr-4">{formatDate3(msg.date)}</span>
							</div>

							<div className="email-body email-text w95 ml2 pb-4 mr-4 borderBtm">
								<p className="white">{msg.body}</p>
							</div>
						</div>
						<div>{msg.attachments && <Attachment attachments={msg.attachments} />}</div>
						<div className="mt-4 mb-4 ml-5">
							<ButtonGroup>
								<Button className="mr-5" variant="info">
									<CIcon name="cil-share-all" />&nbsp;&nbsp;Repondre
								</Button>
								<Button className="violetBg">
									<CIcon name="cil-transfer" />&nbsp;&nbsp;Transférer
								</Button>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default EmailDetails;
