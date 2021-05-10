import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderAction } from 'src/actions';
import Card from 'src/components/Card';
import Layout from 'src/components/Layout';
import { formatDate } from 'src/urlConfig';
import '../ActiveOrders/style.css'

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



	return (
		<Layout>
			<h1 style={{ margin: '3rem' }}>Status des Achats</h1>
			{order.orders.map((orderItem, index) => (
				<Card
				style = {{
						margin: '60px auto'
					}}
					key={index}
					headerLeft={`ARCHIVES DES COMMANDE - ${orderItem._id}`}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '30px 20px',
							alignItems: 'center'
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
										<div className="date">{formatDate(status.date)}</div>
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
