import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { createPageAction } from 'src/actions';
import Input from '../../../components/UI/Input';
import NewModal from '../../../components/UI/Modal';
import linearCategories from '../../../helpers/linearCategories';
import './style.css';

export default function Page(props) {
	const category = useSelector((state) => state.category);
	const page = useSelector((state) => state.page);
	const [ createModal, setCreateModal ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ type, setType ] = useState('');
	const [ categories, setCategories ] = useState([]);
	const [ categoryId, setCategoryId ] = useState('');
	const [ banners, setBanners ] = useState([]);
	const [ products, setProducts ] = useState([]);

	const dispatch = useDispatch();

	useEffect(
		() => {
			setCategories(linearCategories(category.categories));
		},
		[ category ]
	);

	useEffect(
		() => {
			// console.log(page);
			if (!page.loading) {
				setCreateModal(false);
				setTitle('');
				setType('');
				setCategoryId('');
				setBanners([]);
				setProducts([]);
				setDesc('');
			}
		},
		[ page ]
	);

	const onCategoryChange = (e) => {
		// console.log(e.target.value);
		const category = categories.find((cate) => cate.value === e.target.value);
		setCategoryId(e.target.value);
		setType(category.type);
		// console.log(category);
	};

	const handleBannerImages = (e) => {
		setBanners([ ...banners, e.target.files[0] ]);
	};
	const handleProductImages = (e) => {
		setProducts([ ...products, e.target.files[0] ]);
	};

	const submitPageForm = (e) => {
		const form = new FormData();

		if (title === '') {
			alert('Titre et Description sont réquis');
			setCreateModal(false);
			return;
		}

		form.append('title', title);
		form.append('description', desc);
		form.append('category', categoryId);
		form.append('type', type);
		banners.forEach((banner, index) => {
			form.append('banners', banner);
		});
		products.forEach((product, index) => {
			form.append('products', product);
		});
		// console.log({ title, desc, categoryId, type, banners, products });
		dispatch(createPageAction(form));
	};

	const renderCreatePageModal = () => {
		return (
			<NewModal
				size="lg"
				show={createModal}
				modalTitle={'Créer une Nouvelle Page'}
				handleClose={(e) => setCreateModal(false)}
				handleSubmit={submitPageForm}
			>
				<Container>
					<Row>
						<Col>
							<p>Cate&#769;gorie de Page</p>
							{/* <select className="form-control" value={cateName} onChange={onCategoryChange}>
								<option>Select Category</option>
								{categories.map((cat) => <option key={cat._id}>{cat.name}</option>)}
							</select> */}
							<Input
								type="select"
								value={categoryId}
								onChange={onCategoryChange}
								options={categories}
								placeholder="Se&#769;lectionner Cate&#769;gorie de la Page"
							/>
						</Col>
					</Row>
					<br />

					<Row>
						<Col>
							<Input
								className="form-control"
								label={'Titre de Page'}
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder={'Ajouter Titre de la Page'}
							/>
						</Col>
					</Row>
					<br />
					<Row>
						<Col>
							<p>Description de la Page</p>
							<Input
								className="form-control"
								rows="4"
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								placeholder={'Ajouter une Description'}
							/>
						</Col>
					</Row>

					<div className="listImagesContainer">
						<br />
						<p>Se&#769;lectionner Bande&#769;role Publicitaire</p>
						<Row>
							{banners.length > 0 ? (
								banners.map((banner, index) => (
									<div>
										<Row className="listImages" key={index}>
											<Col>{banner.name}</Col>
										</Row>
									</div>
								))
							) : null}
							<Col>
								<Input
									className="form-control"
									type="file"
									name="banners"
									onChange={handleBannerImages}
								/>
							</Col>
						</Row>
					</div>

					<div className="listImagesContainer">
						<br />
						<p>Se&#769;lectionner Images pour la Page</p>
						<Row>
							{products.length > 0 ? (
								products.map((product, index) => (
									<div>
										<Row className="listImages" key={index}>
											<Col>{product.name}</Col>
										</Row>
									</div>
								))
							) : null}
							<Col>
								<Input
									className="form-control"
									type="file"
									name="products"
									onChange={handleProductImages}
								/>
							</Col>
							<br />
						</Row>
					</div>
				</Container>
			</NewModal>
		);
	};

	return (
		<React.Fragment>
			<h1 style={{ margin: '3rem', color: 'white' }}>Cre&#769;er une nouvelle page</h1>
			{renderCreatePageModal()}

			<Button variant="success" className="addButton" onClick={() => setCreateModal(true)}>
				<MdAddCircle /> Cre&#769;er une Page
			</Button>
			{props.children}
		</React.Fragment>
	);
}
