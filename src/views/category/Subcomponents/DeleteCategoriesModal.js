import React from 'react';
import NewModal from '../../../components/UI/Modal';

const DeleteCategoriesModal = (props) => {
	const { show, handleClose, size, modalTitle, expandedArray, checkedArray, buttons } = props;
	return (
		<NewModal modalTitle={modalTitle} show={show} handleClose={handleClose} buttons={buttons} size={size}>
			{/* Are you sure ? */}
			<h5>Cate&#769;gories Re&#769;pandues</h5>
			{expandedArray.map((item, index) => (
				<span key={index}>
					{item.name} <br />
				</span>
			))}
			<h5>Cate&#769;gories Se&#769;lectionne&#769;es</h5>
			{checkedArray.map((item, index) => (
				<span key={index}>
					{item.name}
					<br />
				</span>
			))}
		</NewModal>
	);
};

export default DeleteCategoriesModal;
