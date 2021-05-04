//  OPTIMIZE THE BASE URL

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://mimishopbackend.herokuapp.com' : 'http://localhost:2000';

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (filename) => {
	return `${baseUrl}/public/${filename}`;
};

// DEV
// const baseUrl2 = 'http://localhost:2000';

// export const api = `${baseUrl2}/api`;

// export const generatePublicUrl = (filename) => {
// 	return `${baseUrl2}/public/${filename}`;
// };

export const formatter = new Intl.NumberFormat('fr-FR', {
	style: 'currency',
	currency: 'XOF',
	minimumFractionDigits: 0
});
