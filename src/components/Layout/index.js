import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Layout(props) {
	return (
		<React.Fragment>
		
			{props.sidebar ? (
				<Container fluid className="layoutRoot">
					<Row>
						<Col md={2} className="sidebar">
							<ul>
								<li>
									<NavLink exact to={`/`}>
										Accueil
									</NavLink>
								</li>
								<li>
									<NavLink to={`/page`}>Pages</NavLink>
								</li>
								<li>
									<NavLink to={`/category`}>Cate&#769;gories</NavLink>
								</li>
								<li>
									<NavLink to={`/products`}>Produits</NavLink>
								</li>
								<li>
									<NavLink to={`/orders`}>Commandes</NavLink>
								</li>
							</ul>
						</Col>
						<Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
							{props.children}
						</Col>
					</Row>
				</Container>
			) : (
				props.children
			)}
		</React.Fragment>
	);
}
