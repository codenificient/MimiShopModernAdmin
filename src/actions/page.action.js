import axiosInstance from '../helpers/axios';
import { pageConstants } from './constants';

export const createPageAction = (form) => {
	return async (dispath) => {
		dispath({ type: pageConstants.CREATE_PAGE_REQUEST });

		try {
			const res = await axiosInstance.post(`/page/create`, form);

			if (res.status === 201) {
				dispath({
					type: pageConstants.CREATE_PAGE_SUCCESS,
					payload: { page: res.data.page }
				});
				console.log(res);
			} else {
				dispath({
					type: pageConstants.CREATE_PAGE_FAILURE,
					payload: { error: res.data.error }
				});
				console.log(res);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllPagesAction = (form) => {
	return async (dispath) => {
		dispath({ type: pageConstants.GET_ALL_PAGES_REQUEST });

		try {
			const res = await axiosInstance.get(`/page/allpages`);

			if (res.status === 200) {
				dispath({
					type: pageConstants.GET_ALL_PAGES_SUCCESS,
					payload: { pages: res.data.pages }
				});
				console.log(res);
			} else {
				dispath({
					type: pageConstants.CREATE_PAGE_FAILURE,
					payload: { error: res.data.error }
				});
				console.log(res);
			}
		} catch (error) {
			console.log(error);
		}
	};
};
