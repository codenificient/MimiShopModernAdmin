import { CButton, CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { FaCloudUploadAlt, FaPlusCircle, FaRegTrashAlt } from 'react-icons/fa';
import {
	IoIosArrowDropdownCircle,
	IoIosArrowDroprightCircle,
	IoIosCheckbox,
	IoIosCheckboxOutline
} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction, deleteCategoriesAction, updateCategoriesAction } from '../../../actions';
import '../style.css';
import AddCategoriesModal from '../Subcomponents/AddCategoriesModal';
import DeleteCategoriesModal from '../Subcomponents/DeleteCategoriesModal';
import UpdateCategoriesModal from '../Subcomponents/UpdateCategoriesModal';



const Category = () => {
	const category = useSelector((state) => state.category);
	const dispatch = useDispatch();
	const [ categoryName, setCategoryName ] = useState('');
	const [ categoryImage, setCategoryImage ] = useState('');
	const [ parentCategoryId, setParentCategoryId ] = useState('');

	const [ show, setShow ] = useState(false);
	const [ checked, setChecked ] = useState([]);
	const [ checkedArray, setCheckedArray ] = useState([]);
	const [ expanded, setExpanded ] = useState([]);
	const [ expandedArray, setExpandedArray ] = useState([]);
	const [ updateCategoryModal, setUpdateCategoryModal ] = useState(false);

	const [ deleteCategoryModal, setDeleteCategoryModal ] = useState(false);

	useEffect(
		() => {
			if (!category.loading) {
				setShow(false);
			}
		},
		[ category.loading ]
	);

	const handleSubmit = () => {
		const form = new FormData();

		form.append('name', categoryName);
		form.append('parentId', parentCategoryId);
		form.append('categoryImage', categoryImage);
		dispatch(addCategoryAction(form));

		setCategoryImage('');
		setCategoryName('');
		setParentCategoryId('');
		setShow(false);
	};

	const handleShow = () => setShow(true);

	const handleClose = () => setShow(false);

	const renderCategories = (categories) => {
		let myCategories = [];
		for (let category of categories) {
			myCategories.push({
				label: category.name,
				value: category._id,
				children: category.children.length > 0 && renderCategories(category.children)
			});
		}
		return myCategories;
	};

	const createCategoryList = (categories, options = []) => {
		for (let category of categories) {
			options.push({
				value: category._id,
				name: category.name,
				// image: category.categoryImage,
				parentId: category.parentId,
				type: category.type
			});
			if (category.children.length > 0) {
				createCategoryList(category.children, options);
			}
		}
		return options;
	};

	const handleCategoryImage = (e) => {
		// e.preventDefault();
		setCategoryImage(e.target.files[0]);
	};

	const updateCategory = () => {
		updateCheckedAndExpandedCategories();
		setUpdateCategoryModal(true);

		// console.log({ checked, expanded, categories, checkedArray, expandedArray });
	};

	const updateCheckedAndExpandedCategories = () => {
		const categories = createCategoryList(category.categories);
		const checkedArray = [];
		const expandedArray = [];
		checked.length > 0 &&
			checked.forEach((categoryId, index) => {
				const category = categories.find((category, _index) => categoryId === category.value);
				category && checkedArray.push(category);
			});
		expanded.length > 0 &&
			expanded.forEach((categoryId, index) => {
				const category = categories.find((category, _index) => categoryId === category.value);
				category && expandedArray.push(category);
			});
		setCheckedArray(checkedArray);
		setExpandedArray(expandedArray);
	};

	const handleCategoryInput = (key, value, index, type) => {
		if (type === 'checked') {
			const updatedCheckedArray = checkedArray.map(
				(item, _index) => (index === _index ? { ...item, [key]: value } : item)
			);
			setCheckedArray(updatedCheckedArray);
		} else if (type === 'expanded') {
			const updatedExpandedArray = expandedArray.map(
				(item, _index) => (index === _index ? { ...item, [key]: value } : item)
			);
			setExpandedArray(updatedExpandedArray);
		}
	};

	const deleteCategories = () => {
		const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }));
		const expandedIdsArray = expandedArray.map((item, index) => ({ _id: item.value }));
		const idsArray = expandedIdsArray.concat(checkedIdsArray);
		if (checkedIdsArray.length > 0) {
			dispatch(deleteCategoriesAction(checkedIdsArray));
			setDeleteCategoryModal(false);
		}
	};

	const updateCategoriesForm = () => {
		const form = new FormData();
		expandedArray.forEach((item, index) => {
			form.append('_id', item.value);
			form.append('name', item.name);
			form.append('parentId', item.parentId ? item.parentId : '');
			form.append('type', item.type);
		});
		checkedArray.forEach((item, index) => {
			form.append('_id', item.value);
			form.append('name', item.name);
			form.append('parentId', item.parentId ? item.parentId : '');
			form.append('type', item.type);
		});

		dispatch(updateCategoriesAction(form));
		setUpdateCategoryModal(false);
	};

	const deleteCategory = () => {
		updateCheckedAndExpandedCategories();
		// console.log({ checkedArray });
		setDeleteCategoryModal(true);
	};

	const categoryList = createCategoryList(category.categories);


	return (
		<>
			
		<CRow>
			<CCol xs="12">
				<CCard>
			
						<CRow style={{ background: 	'#67dcbb',borderRadius: '5px' }}>
							<CCol md={12}>
								<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
									<h1 style={{ margin: '1rem', color: '#333' }}>Ajouter ou Modifier les Cate&#769;gories</h1>
								</div>
							</CCol>
						</CRow>
						
						<CRow className="mt-5">
							<CCol md={12}>
								<CButton className="btn-pill btn-warning ml-5" onClick={handleShow}>
									<FaPlusCircle style={{ fontSize: '27px' }} /> <span>Ajouter Cate&#769;gorie</span>
								</CButton>
								<Button onClick={updateCategory} className="btn-pill btn-info" variant="info">
									<FaCloudUploadAlt style={{ fontSize: '27px' }} />{' '}
									<span>Modifier Cate&#769;gorie</span>
								</Button>
								<Button onClick={deleteCategory} className="btn-pill btn-danger" variant="danger">
									<FaRegTrashAlt style={{ fontSize: '27px' }} />{' '}
									<span>Supprimer Cate&#769;gorie</span>
								</Button>
							</CCol>
						</CRow>

						<CRow className="showCats ml-5">
							<CCol md={12}>
								<CheckboxTree
									nodes={renderCategories(category.categories)}
									checked={checked}
									expanded={expanded}
									onCheck={(checked) => setChecked(checked)}
									onExpand={(expanded) => setExpanded(expanded)}
									icons={{
										check: <IoIosCheckbox />,
										uncheck: <IoIosCheckboxOutline />,
										halfCheck: <IoIosCheckboxOutline />,
										expandClose: <IoIosArrowDroprightCircle />,
										expandOpen: <IoIosArrowDropdownCircle />
									}}
								/>
							</CCol>
						</CRow>
					
					

						<AddCategoriesModal
							show={show}
							handleClose={handleClose}
							modalTitle={`Ajouter Nouvelle Catégorie`}
							size="lg"
							handleShow={handleShow}
							handleSubmit={handleSubmit}
							categoryName={categoryName}
							setParentCategoryId={(e) => setParentCategoryId(e.target.value)}
							parentCategoryId={parentCategoryId}
							setCategoryName={(e) => setCategoryName(e.target.value)}
							categoryImage={categoryImage}
							handleCategoryImage={handleCategoryImage}
							categoryList={categoryList}
						/>

						<UpdateCategoriesModal
							show={updateCategoryModal}
							handleClose={() => setUpdateCategoryModal(false)}
							modalTitle={`Modifier Catégories`}
							handleShow={updateCategoryModal}
							handleSubmit={updateCategoriesForm}
							size="xl"
							expandedArray={expandedArray}
							checkedArray={checkedArray}
							handleCategoryInput={handleCategoryInput}
							categoryList={categoryList}
						/>
						{/* {renderDeleteCategoryModal()} */}

						<DeleteCategoriesModal
							show={deleteCategoryModal}
							modalTitle="Confirmer Supprimer Catégories"
							handleClose={() => setDeleteCategoryModal(false)}
							buttons={[
								{
									label: 'No',
									color: 'primary',
									onClick: () => setDeleteCategoryModal(false)
								},
								{
									label: 'Yes',
									color: 'danger',
									onClick: deleteCategories
								}
							]}
							size="lg"
							expandedArray={expandedArray}
							checkedArray={checkedArray}
						/>
					<CCardBody />
				</CCard>
			</CCol>

		</CRow>

</>
	);
};

export default Category;
