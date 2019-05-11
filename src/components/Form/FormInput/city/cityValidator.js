const checkAlphaNums = input => {
	const alphanumsRegex = /^[a-z0-9]+$/i;

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
