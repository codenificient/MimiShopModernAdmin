import { CBadge, CCard, CCardBody, CCol, CDataTable, CRow } from '@coreui/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Layout from '../../../components/Layout';
import './style.css';

const ModifyProduct = () => {
	const product = useSelector((state) => state.product);

	const createProductList = (products, options = []) => {
		for (let product of products) {
			let { _id, name, price, quantity, category } = product;
			options.push({
				ID: _id.toString().substring(0, 9),
				NAME: name,
				PRICE: price,
				QUANTITY: quantity,
				CATEGORY: category.name,
				STATUS:
					quantity % 3 == 1
						? 'Active'
						: quantity % 2 == 1 ? 'Inactive' : quantity % 5 == 0 ? 'Archived' : 'Pending'
			});
			// console.table({ options });
		}
		return options;
	};

	const getBadge = (status) => {
		switch (status) {
			case 'Active':
				return 'success';
			case 'Inactive':
				return 'warning';
			case 'Pending':
				return 'primary';
			case 'Banned':
				return 'danger';
			default:
				return 'danger';
		}
	};

	const renderProducts = () => {
		const fields = [ 'ID', 'NAME', 'PRICE', 'QUANTITY', 'CATEGORY', 'status' ];

		return (
			<CRow>
				<CCol xs="12" lg="12">
					<CCard>
						<CCardBody>
							<CDataTable
								items={createProductList(product.products)}
								fields={fields}
								striped
								itemsPerPage={30}
								pagination
								scopedSlots={{
									status: (item) => (
										<td>
											<CBadge color={getBadge(item.STATUS)}>{item.STATUS}</CBadge>
										</td>
									)
								}}
							/>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		);
	};

	return (
		<Layout>
			<Container fluid className="pageBody">
				<Row>
					<Col md={12}>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<h1 style={{ margin: '3rem', color: 'white' }}>Modifier les Produits</h1>
						</div>
					</Col>
				</Row>

				<Row className="card">
					<Col md={12}>
						<ul>{renderProducts()}</ul>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default ModifyProduct;
