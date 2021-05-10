import { cilChartLine } from '@coreui/icons';
import { CBadge, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CDataTable, CPagination, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPageAction } from 'src/actions';
import Layout from 'src/components/Layout';
import Input from 'src/components/UI/Input';
import NewModal from 'src/components/UI/Modal';
import linearCategories from 'src/helpers/linearCategories';
import MainChartExample from 'src/views/charts/MainChartExample';
import Users from 'src/views/users/Users';
import './style.css';

export default function Page(props) {
	const category = useSelector((state) => state.category);
	const product = useSelector((state) => state.product);
	const allpages = useSelector((state) => state.page.allpages);
	const [ currentPage, setCurrentPage ] = useState(1);
	const dispatch = useDispatch();
	const totalPages = allpages.length;

	const createProductList = (products, options = []) => {
		for (let product of products) {
			let { _id, title, description, category, banners, products } = product;
			options.push({
				id: _id.toString().substring(0, 9),
				title,
				category: category.name,				
				description,				
				banners: banners[0].img,
				products: products[0].img
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
				return 'secondary';
			case 'Pending':
				return 'warning';
			case 'Banned':
				return 'danger';
			default:
				return 'primary';
		}
	};

	const renderProducts = () => {

		const fields = [ 'id', 'title', 'category', 'description', 'banners', 'products'  ];

		return (
			<CRow>
				<CCol xs="12" lg="12">
					<CCard>
						<CCardHeader>Toutes Les Pages</CCardHeader>
						<CCardBody>
							<CDataTable
								items={createProductList(allpages)}
								fields={fields}
								striped
								itemsPerPage={30}
								pagination
								scopedSlots={{
									status: (item) => (
										<td>
											<CBadge color={getBadge(item.status)}>{item.status}</CBadge>
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
		<React.Fragment>
			<h1 style={{ margin: '3rem' }}>TOUTES LES PAGE</h1>

			<CCard>
				<CCardBody>
					<MainChartExample />

					<Row className="card mt-5">
						<Col md={12}>
							<ul>{renderProducts()}</ul>
						</Col>
					</Row>
				</CCardBody>

				<CCardFooter align="center">Created By</CCardFooter>
			</CCard>
			{props.children}
		</React.Fragment>
	);
}
