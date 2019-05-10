const isAlphaNums = input => {
	const isAlphanumsRegex = /^[a-z0-9]+$/i;
	const isAlphanums = isAlphanumsRegex.test(input);

	return isAlphanums;
};

export default input => {
	if (!isAlphaNums(input))
		return {
			valid: false,
			message:
				'Un nom de ville ne doit contenir que des caractères alphanumériques',
		};

	return {
		valid: true,
		message: '',
	};
};
