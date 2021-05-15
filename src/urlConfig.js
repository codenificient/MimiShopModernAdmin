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

function appendLeadingZeroes(n) {
	if (n <= 9) {
		return '0' + n;
	}
	return n;
}

export const formatDate = (date) => {
	if (date) {
		const d = new Date(date);
		return `${appendLeadingZeroes(d.getMonth() + 1)}-${appendLeadingZeroes(d.getDate())}-${appendLeadingZeroes(
			d.getFullYear()
		)}`;
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

export const formatDate3 = (date) => {
	const month = [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc' ];
	const week = [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ];
	if (date) {
		const d = new Date(date);
		return `${week[d.getDay()]} le ${appendLeadingZeroes(d.getDate())} ${month[
			d.getMonth()
		]}  ${d.getFullYear()} à ${appendLeadingZeroes(d.getHours())}:${appendLeadingZeroes(d.getMinutes())}`;
	}
};

export const shorten = (str, maxLen, separator = ' ') => {
	if (str.length <= maxLen) return str;
	return str.substr(0, str.lastIndexOf(separator, maxLen));
};
