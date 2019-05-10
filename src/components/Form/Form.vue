<template>
	<div class="form">
		<h2>Gagnez un Dodow !</h2>
		<form class="form-fields" action>
			<FormInput placeholder="Ma ville" :field_validator="validators.cityValidator"/>
			<FormInput placeholder="Mon code postal" :field_validator="validators.postalCodeValidator"/>
		</form>
	</div>
</template>

<script>
import FormInput from "@/components/Form/FormInput.vue";
import postalCodeValidator from "@/validators/postalCodeValidator.js";
import cityValidator from "@/validators/cityValidator.js";

export default {
	name: "Form",
	components: { FormInput },
	data: function() {
		return {
			validators: {
				postalCodeValidator,
				cityValidator
			}
		};
	}
};
</script>

<style scoped>
.form {
	padding: 1em;

	color: white;
	text-shadow: 2px 1px 0px hsla(0, 0%, 0%, 0.1);
	background-color: hsl(180, 33%, 68%);
}

.form-fields {
	display: flex;
	align-content: center;
	justify-content: center;
	flex-wrap: wrap;

	margin-bottom: 2em;
}
</style>
