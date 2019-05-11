const isDigits = input => {
	const digitsRegex = /^\d+$/;

	return digitsRegex.test(input);
};

export default input => {
	if (!input)
		return {
			valid: false,
			message: 'Ce champ est obligatoire.',
		};

	const hasOnlyDigits = isDigits(input);
	if (!hasOnlyDigits)
		return {
			valid: false,
			message: 'Un code postal ne doit contenir que des chiffres.',
		};

	const hasCorrectLength = input.length === 7;
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
