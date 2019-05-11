export default postalCode => {
	if (postalCode.length < 3) return postalCode;

	const splitted = postalCode.split('');
	splitted.splice(3, 0, '-');
	const result = splitted.join('');
	return result;
};
