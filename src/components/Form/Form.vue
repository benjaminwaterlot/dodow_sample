<template>
	<div class="form">
		<h1 class="form-title">
			<span class="subtitle">Jeu concours</span>
			<br>
			<span>Gagnez un Dodow !</span>
		</h1>
		<form>
			<div class="form-fields">
				<FormInput
					v-for="input in inputs"
					:key="input.label"
					:placeholder="input.label"
					:validator="input.validator"
					:formatter="input.formatter"
					@validationEvent="updateFormState"
					style="margin: 20px;"
				/>
			</div>
			<FormButton :active="isFormValid"/>
		</form>
	</div>
</template>

<script>
import FormInput from "@/components/Form/FormInput/FormInput.vue";
import FormButton from "@/components/Form/FormButton/FormButton.vue";

import postalCodeValidator from "@/components/Form/FormInput/postalCode/postalCodeValidator.js";
import postalCodeFormatter from "@/components/Form/FormInput/postalCode/postalCodeFormatter.js";

import cityValidator from "@/components/Form/FormInput/city/cityValidator.js";

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
			isFormValid: false
		};
	},
	methods: {
		updateFormState: function(info) {
			// TODO : COMPLETE
			console.log(info);
		}
	}
};
</script>

<style scoped>
.form {
	margin: auto;
	padding: 3em 1em;
	min-height: 500px;

	background-color: hsl(180, 33%, 68%);
	border-radius: 0.3em;
}
.form-title {
	color: white;
	text-shadow: 2px 1px 0px hsla(0, 0%, 0%, 0.1);
}
.form-title > .subtitle {
	font-weight: 500;
	font-size: 0.9em;
}
.form-fields {
	display: flex;
	align-content: center;
	justify-content: center;
	flex-wrap: wrap;
}
</style>
