import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Input from '../../../components/UI/Input';
import NewModal from '../../../components/UI/Modal';

const UpdateCategoriesModal = (props) => {
	const {
		show,
		handleClose,
		handleShow,
		handleSubmit,
		size,
		modalTitle,
		expandedArray,
		checkedArray,
		handleCategoryInput,
		categoryList
	} = props;

	return (
		<NewModal
			show={show}
			handleClose={handleClose}
			modalTitle={modalTitle}
			handleShow={handleShow}
			handleSubmit={handleSubmit}
			size={size}
		>
			<Row>
				<Col>
					<h5>Cate&#769;gories Re&#769;pandues</h5>
				</Col>
			</Row>
			{expandedArray.length > 0 &&
				expandedArray.map((item, index) => (
					<Row key={index}>
						<Col>
							<Input
								value={item.name}
								placeholder={`Nom de la Cate&#769;gory`}
								onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
							/>
						</Col>
						<Col>
							<select
								label={`Se&#769;lectionner une Cate&#769;gorie`}
								className="form-control"
								value={item.parentId}
								onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}
							>
								<option>Se&#769;lectionner une Cate&#769;gorie</option>
								{categoryList.map((option) => (
									<option key={option.name} value={option.value}>
										{option.name}
									</option>
								))}
							</select>
						</Col>

						<Col>
							<select
								className="form-control"
								value={item.type}
								onChange={(e) => handleCategoryInput('type', e.target.value, index, 'expanded')}
							>
								<option value="">Sélectionner le Type de Cate&#769;gorie</option>
								<option value="store">Boutique</option>
								<option value="product">Produit</option>
								<option value="page">Page</option>
							</select>
						</Col>
					</Row>
				))}
			<Row>
				<Col>
					<h5>Cate&#769;gories Re&#769;pandues</h5>
				</Col>
			</Row>
			{checkedArray.length > 0 &&
				checkedArray.map((item, index) => (
					<Row key={index}>
						<Col>
							<Input
								// label={`Category Name`}
								value={item.name}
								placeholder={`Nom de Cate&#769;gory`}
								onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
							/>
						</Col>
						<Col>
							<select
								label={`Sélectionner une Catégorie`}
								className="form-control"
								value={item.parentId}
								onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}
							>
								<option>Se&#769;lect une Cate&#769;gorie</option>
								{categoryList.map((option) => (
									<option key={option.name} value={option.value}>
										{option.name}
									</option>
								))}
							</select>
						</Col>

						<Col>
							{/* <p> Category Type</p> */}
							<select
								className="form-control"
								value={item.type}
								onChange={(e) => handleCategoryInput('type', e.target.value, index, 'checked')}
							>
								<option value="">Se&#769;lectionner le Type de Cate&#769;gorie</option>
								<option value="store">Boutique</option>
								<option value="product">Product</option>
								<option value="page">Page</option>
							</select>
						</Col>
					</Row>
				))}
		</NewModal>
	);
};

export default UpdateCategoriesModal;
