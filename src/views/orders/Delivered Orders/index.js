import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderAction } from '../../../actions';
import Card from '../../../components/Card';
import Layout from '../../../components/Layout';

export default function Orders(props) {
	const order = useSelector((state) => state.order);
	const dispatch = useDispatch();
	const [ type, setType ] = useState('');
	let [ orderAddress, setOrderAddress ] = useState('');

	const onOrderUpdate = (orderId) => {
		// alert(orderId);
		const payload = {
			orderId,
			type
		};
		dispatch(updateOrderAction(payload));
	};

	const formatDate = (date) => {
		if (date) {
			const d = new Date(date);
			return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
		}
		return '';
	};

	return (
		<Layout>
			<h1 style={{ margin: '3rem', color: '#d16767' }}>Commandes Deja Livrées</h1>
			{order.orders.map((orderItem, index) => (
				<Card
					style={{
						margin: '60px auto',
						color: '#d16767'
					}}
					key={index}
					headerLeft={`DELIVREE DE COMMANDE - ${orderItem._id}`}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '30px 20px',
							alignItems: 'center',
							fontSize: '18px'
						}}
					>
						<div>
							<div className="title">Items</div>
							{orderItem.items.map((item, index) => (
								<div className="value" key={index}>
									{item.productId.name}
								</div>
							))}
						</div>
						<div>
							<span className="title">Montant Total</span>
							<br />
							<span className="value">{orderItem.totalAmount}</span>
						</div>
						<div>
							<span className="title">Type de Paiement</span> <br />
							<span className="value">{orderItem.paymentType}</span>
						</div>
						<div>
							<span className="title">Status de Paiement</span> <br />
							<span className="value">{orderItem.paymentStatus}</span>
						</div>
					</div>
					<div
						style={{
							boxSizing: 'border-box',
							padding: '100px',
							display: 'flex',
							alignItems: 'center'
						}}
					>
						<div className="orderTrack">
							{orderItem.orderStatus.map((status) => (
								<div className={`orderStatus ${status.isCompleted ? 'active' : ''}`}>
									<div className={`point ${status.isCompleted ? 'active' : ''}`} />
									<div className="orderInfo">
										<div className="status">{status.type}</div>
										<div className="statusDate">{formatDate(status.date)}</div>
									</div>
								</div>
							))}
						</div>

						{/* select input to apply order action */}
						<div
							style={{
								paddingLeft: '50px',
								boxSizing: 'border-box'
							}}
						>
							<select onChange={(e) => setType(e.target.value)}>
								<option value={''}>Mise à Jour du Status</option>
								{orderItem.orderStatus.map((status) => {
									return (
										<React.Fragment>
											{!status.isCompleted ? (
												<option key={status.type} value={status.type}>
													{status.type}
												</option>
											) : null}
										</React.Fragment>
									);
								})}
							</select>
						</div>
						{/* button to confirm action */}

						<div
							style={{
								paddingLeft: '40px',
								boxSizing: 'border-box'
							}}
						>
							<Button
								className="confirmOrderButton infoButton"
								variant="info"
								onClick={() => onOrderUpdate(orderItem._id)}
							>
								Confirmer
							</Button>
						</div>
					</div>
				</Card>
			))}
		</Layout>
	);
}
