import { CCard, CCardBody } from '@coreui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Email from '../email';
import './style.css';

export default function OutgoingMessages(props) {
	const allpages = useSelector((state) => state.page.allpages);

	const msg = [
		{
			date: '8/23/2020',
			name: 'Lula Maudsley',
			body:
				'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'
		},
		{
			date: '12/26/2018',
			name: 'Hollie Radolf',
			body:
				'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.'
		},
		{
			date: '12/19/2019',
			name: 'Morna Cains',
			body:
				'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.'
		},
		{
			date: '7/3/2019',
			name: 'Alfonse Derwin',
			body:
				'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
		},
		{
			date: '8/27/2019',
			name: 'Laurel Dady',
			body:
				'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.'
		},
		{
			date: '11/3/2019',
			name: 'Alexis Jacomb',
			body: 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
		},
		{
			date: '8/11/2019',
			name: 'Bernadette Mary',
			body:
				'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
		},
		{
			date: '6/19/2019',
			name: 'Levin Couser',
			body:
				'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
		},
		{
			date: '5/6/2020',
			name: 'Sandi Davidovitch',
			body:
				'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.'
		},
		{
			date: '4/8/2020',
			name: 'Bernarr Grigor',
			body:
				'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
		},
		{
			date: '6/16/2019',
			name: 'Antonin Birdseye',
			body:
				'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
		},
		{
			date: '6/21/2019',
			name: 'Ariel Sarjeant',
			body: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.'
		},
		{
			date: '8/6/2019',
			name: 'Guenevere Foad',
			body:
				'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
		},
		{
			date: '8/25/2020',
			name: 'Phillip Jemison',
			body:
				'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
		},
		{
			date: '10/21/2020',
			name: 'Savina Bewicke',
			body:
				'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.'
		}
	];

	return (
		<React.Fragment>
			<h2 className="textLight" style={{ margin: '1rem' }}>
				Messages Envoyés
			</h2>

			<CCard>
				<CCardBody>
					<Email emails={msg} icon={false} direction="To: " />
				</CCardBody>
			</CCard>
		</React.Fragment>
	);
}
