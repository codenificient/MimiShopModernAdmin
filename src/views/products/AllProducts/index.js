import { CBadge, CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../../../actions';
import Layout from '../../../components/Layout';
import Input from '../../../components/UI/Input';
import NewModal from '../../../components/UI/Modal';
import { formatter, generatePublicUrl } from '../../../urlConfig';
import './style.css';

export default function Products() {
	const category = useSelector((state) => state.category);
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const [ show, setShow ] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const [ name, setName ] = useState('');
	const [ categoryId, setCategory ] = useState('');
	const [ quantity, setQuantity ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ deliveryFee, setDeliveryFee ] = useState('');
	const [ offer, setOffer ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ productPictures, setProductPictures ] = useState('');

	const [ productDetailsModal, setProductDetailsModal ] = useState(false);
	const [ productDetails, setProductDetails ] = useState(null);

	const handleSubmit = () => {
		const form = new FormData();
		form.append('name', name);
		form.append('quantity', quantity);
		form.append('price', price);
		form.append('category', categoryId);
		form.append('description', description);
		form.append('deliveryFee', deliveryFee);
		form.append('offer', offer);

		for (let pic of productPictures) {
			form.append('productPictures', pic);
		}
		dispatch(addProductAction(form));

		setName('');
		setCategory('');
		setDescription('');
		setQuantity('');
		setOffer('');
		setDeliveryFee('');
		setPrice('');
		setProductPictures('');

		handleClose();
		// dispatch(getAllProductsAction());
	};

	const createCategoryList = (categories, options = []) => {
		for (let category of categories) {
			options.push({
				value: category._id,
				name: category.name
			});
			if (category.children.length > 0) {
				createCategoryList(category.children, options);
			}
		}
		return options;
	};


	const createProductList = (products, options = []) => {
		for (let product of products) {
			let { _id, name, price, quantity, category } = product;
			options.push({
				id: _id.toString().substring(0, 9),
				name: name,
				price: price,
				quantity: quantity,
				category: category.name,
				status: quantity % 3 == 1 ? 'Active' : quantity % 2 == 1 ? 'Inactive' : quantity % 5 == 0 ? 'Archived' : 'Pending'
			});
			console.table({ options });
		}
		return options;
	};


	const handleProductImage = (e) => {
		e.preventDefault();
		setProductPictures([ ...productPictures, e.target.files[0] ]);
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
		const fields = [ 'id', 'name', 'price', 'quantity', 'category', 'status' ];

		return (
			<CRow>
				<CCol xs="12" lg="12">
					<CCard>
						<CCardHeader>Tous Les Produits</CCardHeader>
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

	const renderAddProductModal = () => {
		return (
			<NewModal
				show={show}
				handleClose={handleClose}
				modalTitle={`Ajouter Nouveau Produit`}
				handleShow={handleShow}
				handleSubmit={handleSubmit}
			>
				<Input
					label={`Nom Produit `}
					value={name}
					placeholder={`Nom du Produit `}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					label={`Quantité`}
					value={quantity}
					placeholder={`Quantité du Produit `}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<Input
					label={`Prix Unitaire`}
					value={price}
					placeholder={`Prix Unitaire du Produit`}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<Input
					label={`Frais de Livraison`}
					value={deliveryFee}
					placeholder={`Ajouter frais de livraison`}
					onChange={(e) => setDeliveryFee(e.target.value)}
				/>
				<Input
					label={`Description du Produit`}
					value={description}
					placeholder={`Ajouter une description`}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<p>Product Category</p>
				<select className="form-control" value={categoryId} onChange={(e) => setCategory(e.target.value)}>
					<option>Se&#769;lectionner une Cate&#769;gorie</option>
					{createCategoryList(category.categories).map((option) => (
						<option key={option.name} value={option.value}>
							{option.name}
						</option>
					))}
				</select>
				<Input
					label={`Offeres et Promotions`}
					value={offer}
					type="text"
					placeholder={`Ajouter les offres ou promotions pour ce Produit`}
					onChange={(e) => setOffer(e.target.value)}
				/>
				<p>Se&#769;lectionner Images pour ce produit</p>

				{productPictures.length > 0 ? (
					productPictures.map((picture, index) => <div key={index}>{picture.name}</div>)
				) : null}
				<input type="file" name={productPictures} onChange={handleProductImage} />
			</NewModal>
		);
	};

	// const handleCloseProductDetailsModal = () => {
	// 	setProductDetailsModal(false);
	// };

	const showProductDetailsModal = (product) => {
		setProductDetails(product);
		setProductDetailsModal(true);
	};

	const renderProductDetailModal = () => {
		if (!productDetails) {
			return null;
		}
		return (
			<NewModal
				show={productDetailsModal}
				handleClose={() => setProductDetailsModal(false)}
				modalTitle={`Détails du Produits`}
				size="xl"
			>
				<Row>
					<Col md={6}>
						<label className="key">Nom du Produit</label>
						<p className="value">{productDetails.name}</p>
					</Col>
					<Col md={6}>
						<label className="key">Cate&#769;gorie</label>
						<p className="value">{productDetails.category.name}</p>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<label className="key">Prix</label>
						<p className="value">{formatter.format(productDetails.price)}</p>
					</Col>
					<Col md={6}>
						<label className="key">Quantite&#769;</label>
						<p className="value">{productDetails.quantity}</p>
					</Col>
					<Col md={12}>
						<label className="key">Frais de Livraison</label>
						<p className="value">
							{productDetails.deliveryFee ? formatter.format(productDetails.deliveryFee) : 'GRATUIT'}
						</p>
					</Col>
				</Row>

				<Row>
					<Col md={12}>
						<label className="key">Description du Produit</label>
						<p className="value">{productDetails.description}</p>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<label className="key">Images du Produit</label>
						<div style={{ display: 'flex' }}>
							{productDetails.productPictures.map((picture) => (
								<div className="productImg">
									<img src={generatePublicUrl(picture.img)} alt={picture.img} />
								</div>
							))}
						</div>
					</Col>
				</Row>
			</NewModal>
		);
	};

	return (
		<Layout>
			<Container fluid className="pageBody">
				<Row>
					<Col md={12}>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<h1 style={{ margin: '3rem' }}>Liste des Produits </h1>
							
						</div>
					</Col>
				</Row>

				<Row className="card">
					<Col md={12}>
						<ul>{renderProducts()}</ul>
					</Col>
				</Row>
			</Container>
			{renderAddProductModal()}
			{renderProductDetailModal()}
		</Layout>
	);
}
