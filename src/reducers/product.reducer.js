import { productConstants } from '../actions/constants';

const initialState = {
	products: []
};
// eslint-disable-next-line
export default (state = initialState, action) => {
	switch (action.type) {
		case productConstants.GET_ALL_PRODUCT_SUCCESS:
			state = {
				...state,
				products: action.payload.products
			};
			break;
	}

	return state;
};
