const isDigits = input => {
	const isDigitsRegex = /^\d+$/;
	const isDigits = isDigitsRegex.test(input);

	return isDigits;
};

export default input => {
	const hasOnlyDigits = isDigits(input);
	const hasCorrectLength = input.length === 7;

	if (!hasOnlyDigits)
		return {
			valid: false,
			message: 'Un code postal ne doit contenir que des chiffres.',
		};

	if (!hasCorrectLength)
		return {
			valid: false,
			message: 'Un code postal doit contenir 7 chiffres.',
		};

	return {
		valid: true,
		message: '',
	};
};
