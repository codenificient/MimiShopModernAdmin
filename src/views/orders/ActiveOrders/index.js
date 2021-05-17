import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderAction } from 'src/actions';
import CardOne from 'src/components/Card';
import Layout from 'src/components/Layout';
import { formatDate, formatter, shorten } from 'src/urlConfig';
import './style.css';

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
			<h1 style={{ margin: '3rem', color: '#d16767' }}>LES ACHATS EN COURS</h1>
			{order.orders &&
				order.orders.map((orderItem, index) => (
					<CardOne
						style={{
							margin: '60px auto',
							color: 'white',
							background: '#23242D'
						}}
						key={index}
						headerLeft={`NUMÉRO DE COMMANDE - ${orderItem._id}`}
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
								<div className="title">Articles</div>
								{ orderItem.items.map((item, index) => (
									<div className="value" key={index}>
										{shorten(item.productId.name, 50)}
									</div>
								))}
							</div>
							<div>
								<span className="title">Facture</span>
								<br />
								<span className="value">{formatter.format(orderItem.totalAmount)}</span>
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
								padding: '100px 80px',
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<div className="orderTrack sa">
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

							{/* SELECT INPUT TO APPLY ORDER ACTION */}
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

							{/* BUTTON TO CONFIRM USER ACTION */}

							<div
								style={{
									paddingLeft: '40px',
									boxSizing: 'border-box'
								}}
							>
								<Button
									className="confirmOrderButton btn btn-info"
									onClick={() => onOrderUpdate(orderItem._id)}
								>
									Confirmer
								</Button>
							</div>
						</div>
					</CardOne>
				))}
		</Layout>
	);
}