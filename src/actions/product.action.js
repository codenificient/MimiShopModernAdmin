import axiosInstance from '../helpers/axios';
import { productConstants } from './constants';

const getProductsAction = () => {
	return async (dispatch) => {
		let res;
		try {
			dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });
			res = await axiosInstance.get(`product/getproducts`);

			if (res.status === 200) {
				const { productList } = res.data;

				dispatch({
					type: productConstants.GET_ALL_PRODUCT_SUCCESS,
					payload: { products: productList }
				});
				console.log(res);
			} else {
				dispatch({
					type: productConstants.GET_ALL_PRODUCT_FAILURE,
					payload: { error: res.data.error }
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const addProductAction = (form) => {
	return async (dispatch) => {
		dispatch({ type: productConstants.ADD_NEW_PRODUCT_REQUEST });
		try {
			const res = await axiosInstance.post(`/product/create`, form);
			console.log(res);
			if (res.status === 201) {
				dispatch({
					type: productConstants.ADD_NEW_PRODUCT_SUCCESS
				});
				dispatch(getProductsAction());
			} else {
				dispatch({
					type: productConstants.ADD_NEW_PRODUCT_FAILURE,
					payload: { error: res.data.error }
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export { getProductsAction };

export const deleteProductById = (payload) => {
	return async (dispatch) => {
		let res;
		try {
			res = await axiosInstance.delete(`product/deleteProductById`, {
				data: { payload }
			});
			dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
			if (res.status === 202) {
				dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
				dispatch(getProductsAction());
			} else {
				dispatch({
					type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
					payload: {
						error: res.data.error
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};
