import { orderConstants } from '../actions/constants';

const initState = {
	orders: [],
	addresses: [],
	ordersLoading: false,
	addressLoading: false,
	error: null
};

export default (state = initState, action) => {
	switch (action.type) {
		case orderConstants.GET_CUSTOMER_ORDER_REQUEST:
			state = {
				...state,
				ordersLoading: true
			};
			break;
		case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
			state = {
				...state,
				ordersLoading: false,
				orders: action.payload.orders
			};
			break;
		case orderConstants.GET_CUSTOMER_ORDER_FAILURE:
			state = {
				...state,
				ordersLoading: false,
				error: action.payload.error
			};
			break;

		case orderConstants.GET_USER_ADDRESSES_REQUEST:
			state = {
				...state,
				addressLoading: true
			};
			break;
		case orderConstants.GET_USER_ADDRESSES_SUCCESS:
			state = {
				...state,
				addressLoading: false,
				addresses: action.payload.addresses
			};
			break;
		case orderConstants.GET_USER_ADDRESSES_FAILURE:
			state = {
				...state,
				addressLoading: false,
				error: action.payload.error
			};
			break;
	}
	return state;
};
