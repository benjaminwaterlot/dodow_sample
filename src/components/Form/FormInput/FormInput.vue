<template>
	<div class="form-input-wrapper">
		<input
			class="form-input"
			:class="fieldState.valid ? '' : 'invalid'"
			type="text"
			:placeholder="placeholder"
			:value="formattedValue"
			@input="handleInput"
		>
		<div class="error-container">
			<p class="error-message" v-if="!fieldState.valid">{{ fieldState.message }}</p>
		</div>
	</div>
</template>

<script>
import { debounce } from "lodash";

export default {
	name: "FormInput",
	props: {
		placeholder: { type: String, required: true },
		validator: { type: Function, required: false, default: null },
		formatter: { type: Function, required: false, default: null }
	},
	data: function() {
		return {
			fieldValue: "",
			fieldState: { valid: true, message: "" },
			delayedValidation: null
		};
	},
	mounted: function() {
		this.delayedValidation = debounce(this.validateInput, 300);
	},
	methods: {
		handleInput: function(e) {
			const newValue = e.target.value;

			// Remove hyphens from the input, we want only ours.
			this.fieldValue = newValue.replace(/-/g, "");

			// Call validation
			this.callInputValidation(this.fieldValue);
		},
		callInputValidation: function(value) {
			this.delayedValidation(value);
		},
		validateInput: function() {
			const validationNeeded = this.validator;

			// Update the state of this input's validity.
			this.fieldState = validationNeeded
				? this.validator(this.fieldValue)
				: { valid: true, message: "" };

			// Send an event to the parent Form to send him this input's validity.
			this.$emit("validationEvent", this.fieldState.valid);
		}
	},
	computed: {
		formattedValue: function() {
			return this.formatter ? this.formatter(this.fieldValue) : this.fieldValue;
		}
	}
};
</script>

<style scoped>
.form-input-wrapper {
	margin: 0.5em;
	flex-grow: 1;
	max-width: 400px;
}
.form-input {
	padding: 0.5em;
	width: 100%;

	font-size: 1.1em;
	font-weight: 500;
	color: hsl(180, 33%, 35%);
	background-color: hsl(180, 29%, 94%);
	border-radius: 0.2em;
	border: none;
	outline: none;

	transition: 0.2s all ease-out;
}
.form-input::placeholder {
	color: hsl(0, 0%, 63%);
	font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.form-input:focus {
	background-color: white;
	box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.2);
	transform: translateY(-5px);
}
.form-input.invalid {
	color: hsl(0, 62%, 42%);
}

.error-container {
	height: 4em;
	padding: 0.5em 0em;
}
.error-message {
	max-width: 220px;
	font-size: 0.8em;
	text-align: left;
	margin: 0px;

	color: darkslategray;
}
</style>
