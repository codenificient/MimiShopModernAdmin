import CIcon from '@coreui/icons-react';
import { CBadge } from '@coreui/react';
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Attachment from 'src/components/UI/Email/Attachments';
import EmailActions from 'src/components/UI/Email/EmailActions';
import IconList from 'src/components/UI/Email/IconList';
import EmailTitle from 'src/components/UI/Email/Title';
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

				<div className="col-sm-9 ">
					<div className="cards-body normalBg">
						<div className="pt-3 pl-3 textLight">
							<IconList iconList={iconList} style={{ width: '480px', padding: '13px' }} />
						</div>
						<div className="email-title mt-2 mb-5">
							<EmailTitle subject={msg.subject} />
						</div>
						<div className="emailContainer mb-4">
							<div className="flexRow m-4 bold email-user">
								<div className="d-block">
									<div className="recipient">
										<div className="image-container">
											<img src={msg.avatar} alt={msg.avatar} />
										</div>
										<span className="user-name read">{msg.name}</span>
										<br />
										<span className="user-email">Email: {msg.email}</span>
									</div>
								</div>

								<span className="floatRight textLight pr-4">{formatDate3(msg.date)}</span>
							</div>

							<div className="email-body email-text pr-4 pl-4">{msg.body}</div>
						</div>
						<div>{msg.attachments && <Attachment attachments={msg.attachments} />}</div>
						<div className="mt-4 mb-4 ml-5">
							<ButtonGroup>
							<Button className="mr-5" variant="info">
								<CIcon name="cil-share-all" />&nbsp;&nbsp;Repondre
							</Button>
							<Button className="violetBg" >
								<CIcon name="cil-transfer" />&nbsp;&nbsp;Forward
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
