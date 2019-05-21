<template>
	<div>
		<h1 class="form-title">
			<span class="subtitle">Jeu concours</span>
			<br>
			<span>Gagnez un Dodow !</span>
		</h1>
		<form @submit.prevent="submitForm">
			<div class="form-fields">
				<FormInput
					v-for="(input, index) in inputs"
					v-bind="input"
					:key="input.placeholder"
					:fieldIndex="index"
					@validationEvent="validateFormField"
					@inputEvent="updateFormContent"
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
			inputs: [
				{
					placeholder: "Ma ville",
					content: "",
					state: { valid: true, message: "" },
					validator: cityValidator,
					formatter: null
				},
				{
					placeholder: "Mon code postal",
					content: "",
					state: { valid: true, message: "" },
					validator: postalCodeValidator,
					formatter: postalCodeFormatter
				}
			]
		};
	},
	methods: {
		updateFormContent: function([fieldIndex, newFieldContent]) {
			const input = this.inputs[fieldIndex];

			input.content = newFieldContent;
		},
		validateFormField: function(fieldIndex) {
			const input = this.inputs[fieldIndex];
			const { validator } = input;

			// Update the status of this input's state.
			input.state = validator
				? validator(input.content)
				: { valid: true, message: "" };
		},
		submitForm: function() {
			// Revalidate all fields now to stop user from using devtools to forge inputs.
			for (const [index] of this.inputs.entries()) {
				this.validateFormField(index);
			}

			if (this.isFormValid) {
				// Keep only the relevant data
				const toSubmit = this.inputs.map(({ placeholder, content }) => ({
					placeholder,
					content
				}));

				// As we have no server ready, we log here the data we would send instead.
				// eslint-disable-next-line
				console.info(
					"This is a simulation of the info sent to the server.",
					toSubmit
				);

				// Inform the app that we can now switch to the Recap screen.
				this.$emit("formSubmitted", toSubmit);
			}
		}
	},
	computed: {
		isFormValid: function() {
			for (const input of this.inputs) {
				if (!input.state.valid) return false;
			}

			return true;
		}
	}
};
</script>

<style scoped>
.form-title {
	margin: 1em;
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
