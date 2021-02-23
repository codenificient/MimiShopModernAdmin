import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import categoryReducer from './category.reducers';
import orderReducer from './order.reducer';
import pageReducer from './page.reducer';
import productReducer from './product.reducer';
import userReducer from './user.reducers';

const initialState = {
	sidebarShow: 'responsive'
};

const changeState = (state = initialState, { type, ...rest }) => {
	switch (type) {
		case 'set':
			return { ...state, ...rest };
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	auth: authReducer,
	nav: changeState,
	user: userReducer,
	category: categoryReducer,
	product: productReducer,
	order: orderReducer,
	page: pageReducer
});

export default rootReducer;
