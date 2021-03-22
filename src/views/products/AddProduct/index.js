import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction, deleteProductById } from '../../../actions';
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

	const handleProductImage = (e) => {
		e.preventDefault();
		setProductPictures([ ...productPictures, e.target.files[0] ]);
	};

	const renderProducts = () => {
		return (
			<Table responsive="md">
				<thead>
					<tr>
						<th>Produit</th>
						<th>Nom du Produit</th>
						<th>Prix</th>
						<th>Quantite&#769;</th>
						<th>Livraison</th>
						<th>Cate&#769;gorie</th>
						<th>Actions</th>					
					</tr>
				</thead>
				<tbody>
					{product.products.length > 0 ? (
						product.products.map((product, index) => (
							<tr onClick={() => showProductDetailsModal(product)} key={product._id}>
								<td>{index + 1}</td>
								<td>{product.name}</td>
								<td>{formatter.format(product.price)}</td>
								<td>{product.quantity}</td>
								<td>{product.deliveryFee ? formatter.format(product.deliveryFee) : 'GRATUIT'}</td>
								<td>{product.category.name}</td>
								{/* <td><div className="productImg">
									<img src={generatePublicUrl(product.productPictures[0].img)} alt={product.productPictures[0].img} />
								</div>{}</td> */}
								<td>
									<Button className="btn-info" onClick={() => showProductDetailsModal(product)}>
										De&#769;tails
									</Button>

									<Button
										className="btn-danger ml-2"
										onClick={() => {
											const payload = {
												productId: product._id
											};
											dispatch(deleteProductById(payload));
										}}
									>
										Supprimer
									</Button>
								</td>
							</tr>
						))
					) : null}
				</tbody>
			</Table>
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
				size='lg'
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
							<h1 style={{ margin: '3rem', color: 'white' }}>Produits Disponibles</h1>
							<Button variant="success" className="infoButton productBtn" onClick={handleShow}>
								<MdAddCircle style={{ fontSize: '27px' }} /> <span>Ajouter Produit</span>
							</Button>
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
