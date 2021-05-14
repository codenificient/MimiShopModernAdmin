//  OPTIMIZE THE BASE URL
const baseUrl =
	process.env.NODE_ENV === 'production' ? 'https://mimishopbackend.herokuapp.com' : 'http://localhost:2000';

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (filename) => {
	return `${baseUrl}/public/${filename}`;
};

export const formatter = new Intl.NumberFormat('fr-FR', {
	style: 'currency',
	currency: 'XOF',
	minimumFractionDigits: 0
});

export const formatDate = (date) => {
	if (date) {
		const d = new Date(date);
		return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
	}
	return '';
};

export const formatDate2 = (date) => {
	const month = [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc' ];
	if (date) {
		const d = new Date(date);
		return `${d.getDate()} ${month[d.getMonth()]}  ${d.getFullYear()}`;
	}
};

export const shorten = (str, maxLen, separator = ' ') => {
	if (str.length <= maxLen) return str;
	return str.substr(0, str.lastIndexOf(separator, maxLen));
};
