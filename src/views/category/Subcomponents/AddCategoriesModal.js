import React from 'react';
import Input from '../../../components/UI/Input';
import NewModal from '../../../components/UI/Modal';

const AddCategoriesModal = (props) => {
	const {
		show,
		handleClose,
		handleShow,
		handleSubmit,
		size,
		categoryName,
		modalTitle,
		setParentCategoryId,
		parentCategoryId,
		setCategoryName,
		categoryImage,
		handleCategoryImage,
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
			<Input
				label={`Category Name`}
				value={categoryName}
				placeholder={`Enter Category Name`}
				onChange={setCategoryName}
			/>
			<br />
			<p>Se&#769;lectionner Cate&#769;gory</p>
			<select className="form-control" value={parentCategoryId} onChange={setParentCategoryId}>
				<option>Se&#769;lect une Cate&#769;gory</option>
				{categoryList.map((option) => (
					<option key={option.name} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
			<br />
			<p>Se&#769;lect une Image de Cate&#769;gory</p>
			<input type="file" name={categoryImage} onChange={handleCategoryImage} />
		</NewModal>
	);
};

export default AddCategoriesModal;
