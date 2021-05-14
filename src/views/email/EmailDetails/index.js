import CIcon from '@coreui/icons-react';
import React from 'react';
import { msgs } from '../Inbox/userEmails';

function EmailDetails(props) {
	const msg = msgs.find((msg) => msg.id.toString() == props.match.id);
	// const msg = {
	// 	id: {
	// 		$oid: '609ed89ffc13ae117a00012d'
	// 	},
	// 	date: '2011-05-10 08:28:48',
	// 	name: 'Ferne Dobrowlski',
	// 	subject: 'strategize ubiquitous partnerships',
	// 	body:
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
	// }

	return (
		<React.Fragment>
			<div className="c-message mb-4 ">
				<span className="c-message-actions p-3 darkenBg sa">
					{msg && <span className="mr-4 ">{<CIcon size={'xl'} name="cil-star" />}</span>}
				</span>
			</div>
		</React.Fragment>
	);
}

export default EmailDetails;
