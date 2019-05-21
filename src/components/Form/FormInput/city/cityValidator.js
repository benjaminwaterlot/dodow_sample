const checkAlphaNums = input => {
	const alphanumsRegex = /^[a-zA-Z\u00C0-\u017F]+$/;

	return alphanumsRegex.test(input);
};

export default input => {
	if (!input)
		return {
			valid: false,
			message: 'Ce champ est obligatoire.',
		};

	const isAlphaNums = checkAlphaNums(input);
	if (!isAlphaNums)
		return {
			valid: false,
			message:
				'Un nom de ville ne doit contenir que des caractères alphanumériques.',
		};

	return {
		valid: true,
		message: '',
	};
};
