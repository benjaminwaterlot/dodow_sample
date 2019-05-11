<template>
	<div class="form">
		<h2 class="form-title">Gagnez un Dodow !</h2>
		<form>
			<div class="form-fields">
				<FormInput
					v-for="input in inputs"
					:key="input.label"
					:placeholder="input.label"
					:validator="input.validator"
					:formatter="input.formatter"
					style="margin: 20px;"
				/>
			</div>
			<FormButton :active="isFormValid"/>
		</form>
	</div>
</template>

<script>
import FormInput from "@/components/Form/FormInput/FormInput.vue";
import postalCodeValidator from "@/components/Form/FormInput/postalCode/postalCodeValidator.js";
import postalCodeFormatter from "@/components/Form/FormInput/postalCode/postalCodeFormatter.js";
import cityValidator from "@/components/Form/FormInput/city/cityValidator.js";

import FormButton from "@/components/Form/FormButton/FormButton.vue";

export default {
	name: "Form",
	components: { FormInput, FormButton },
	data: function() {
		return {
			inputs: {
				city: {
					label: "Ma ville",
					validator: cityValidator,
					formatter: null
				},
				postalCode: {
					label: "Mon code postal",
					validator: postalCodeValidator,
					formatter: postalCodeFormatter
				}
			},
			isFormValid: null
		};
	},
	computed: {
		isFormValid: function() {}
	}
};
</script>

<style scoped>
.form {
	padding: 1em;
	min-height: 500px;

	background-color: hsl(180, 33%, 68%);
}
.form-title {
	color: white;
	text-shadow: 2px 1px 0px hsla(0, 0%, 0%, 0.1);
}
.form-fields {
	display: flex;
	align-content: center;
	justify-content: center;
	flex-wrap: wrap;

	margin-bottom: 2em;
}
</style>
