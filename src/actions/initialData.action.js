import axiosInstance from '../helpers/axios';
import { categoryConstants, orderConstants, productConstants } from './constants';

export const getInitialDataAction = () => {
	return async (dispatch) => {
		const res = await axiosInstance.post(`/initialData`);
		if (res.status === 200) {
			const { categories, products, orders, addresses } = res.data;
			dispatch({
				type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
				payload: { categories }
			});
			dispatch({
				type: productConstants.GET_ALL_PRODUCT_SUCCESS,
				payload: { products }
			});

			dispatch({
				type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
				payload: { orders }
			});

			dispatch({
				type: orderConstants.GET_USER_ADDRESSES_SUCCESS,
				payload: { addresses }
			});
		}
		// console.log(res);
	};
};
