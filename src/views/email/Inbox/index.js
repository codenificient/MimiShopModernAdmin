import { CCard, CCardBody, CButtonGroup, CButton, CCardFooter } from '@coreui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Input from 'src/components/UI/Input';
import Email from '../email';
import email from '../email';
import './style.css';

export default function Inbox(props) {
	const allpages = useSelector((state) => state.page.allpages);
	
	const iconList = [
		'cil-envelope-closed',
		'cil-star',
		'cil-text',
		'cil-text-size',
		'cil-underline',
		'cil-underline',
		'cil-bookmark',
		'cil-share',
		'cil-share-all',
		'cil-trash',
		'cil-tags',
		'cil-indent-decrease',
		'cil-indent-increase',
		'cil-settings'
	];

		const msgs = [{
  "date": "7/31/2020",
  "name": "Christopher Gandy",
  "body": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "date": "5/31/2020",
  "name": "Netta Lace",
  "body": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
  "date": "1/7/2021",
  "name": "Arron Pauletti",
  "body": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh."
}, {
  "date": "2/5/2021",
  "name": "Lethia Dufaire",
  "body": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "date": "11/12/2020",
  "name": "Dan Guise",
  "body": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla."
}, {
  "date": "1/14/2021",
  "name": "Merrick Stuck",
  "body": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
}, {
  "date": "3/4/2021",
  "name": "Rriocard Blazejewski",
  "body": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl."
}, {
  "date": "11/21/2020",
  "name": "Tracee Waliszek",
  "body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "date": "2/20/2021",
  "name": "Huey Axston",
  "body": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor."
}, {
  "date": "12/24/2020",
  "name": "Paulita Davey",
  "body": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim."
}, {
  "date": "6/10/2020",
  "name": "Kendall Stading",
  "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "date": "1/18/2021",
  "name": "Johny Shutte",
  "body": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti."
}, {
  "date": "12/23/2020",
  "name": "Silvan Pomphrett",
  "body": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
}, {
  "date": "11/9/2020",
  "name": "Jacquelyn Plevin",
  "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat."
}, {
  "date": "10/21/2020",
  "name": "Christy Ambroisin",
  "body": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
}]

	return (
		<React.Fragment>
			<h2 className="textLight" style={{ margin: '1rem' }}>
				Boite de Reception
			</h2>

			<CCard>
				<CCardBody>
					<Email iconList={iconList} icon direction={'From: '} emails={msgs} />
				</CCardBody>

				<CCardFooter className="normalBg sb no-border" align="center">
					Liste complete
				</CCardFooter>
			</CCard>
		</React.Fragment>
	);
}
