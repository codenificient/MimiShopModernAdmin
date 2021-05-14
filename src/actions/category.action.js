import axiosInstance from '../helpers/axios';
import { categoryConstants } from './constants';

const getAllCategoriesAction = () => {
	return async (dispatch) => {
		dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
		const res = await axiosInstance.get(`category/getcategory`);

		if (res.status === 200) {
			const { categoryList } = res.data;

			dispatch({
				type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
				payload: { categories: categoryList }
			});
			// console.log(res);
		} else {
			dispatch({
				type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
				payload: { error: res.data.error }
			});
		}
	};
};

export const addCategoryAction = (form) => {
	return async (dispatch) => {
		dispatch({ type: categoryConstants.ADD_NEW_CATEGORIES_REQUEST });
		try {
			const res = await axiosInstance.post(`/category/create`, form);
			// console.log(res);
			if (res.status === 201) {
				dispatch({
					type: categoryConstants.ADD_NEW_CATEGORIES_SUCCESS,
					payload: { category: res.data.category }
				});
			} else {
				dispatch({
					type: categoryConstants.ADD_NEW_CATEGORIES_FAILURE,
					payload: { error: res.data.error }
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateCategoriesAction = (form) => {
	return async (dispatch) => {
		dispatch({ type: categoryConstants.UPDATE_CATEGORIES_REQUEST });
		const res = await axiosInstance.post(`/category/update`, form);
		// console.log(res);
		if (res.status === 201) {
			dispatch(getAllCategoriesAction());
			dispatch({ type: categoryConstants.UPDATE_CATEGORIES_SUCCESS });
			// console.log(res);
		} else {
			dispatch({
				type: categoryConstants.UPDATE_CATEGORIES_FAILURE,
				payload: { error: res.data.error }
			});
		}
	};
};

export const deleteCategoriesAction = (ids) => {
	return async (dispatch) => {
		dispatch({ type: categoryConstants.DELETE_CATEGORIES_REQUEST });
		const res = await axiosInstance.post(`/category/delete`, {
			payload: { ids }
		});

		if (res.status === 200) {
			dispatch(getAllCategoriesAction());
			dispatch({ type: categoryConstants.DELETE_CATEGORIES_SUCCESS });
		} else {
			dispatch({
				type: categoryConstants.DELETE_CATEGORIES_FAILURE,
				payload: { error: res.data.error }
			});
		}
	};
};

export { getAllCategoriesAction };
