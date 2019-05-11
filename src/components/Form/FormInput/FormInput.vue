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
		<p class="error-message" v-if="!fieldState.valid">{{ fieldState.message }}</p>
	</div>
</template>

<script>
import { debounce } from "lodash";

export default {
	name: "FormInput",
	components: {},
	props: {
		placeholder: { type: String, required: true },
		validator: { type: Function, required: false },
		formatter: { type: Function, required: false }
	},
	data: function() {
		return {
			fieldValue: "",
			fieldState: { valid: true, message: "" },
			delayedValidation: null
		};
	},
	mounted: function() {
		const validator = () => {
			const shouldBeValidated = this.validator;

			this.fieldState = shouldBeValidated
				? this.validator(this.fieldValue)
				: { valid: true, message: "" };
		};
		this.delayedValidation = debounce(validator, 300);
	},
	methods: {
		handleInput: function(e) {
			const newValue = e.target.value;
			this.fieldValue = newValue.replace(/-/g, "");
			this.validate(this.fieldValue);
		},
		validate: function(value) {
			return this.delayedValidation(value);
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
}
.form-input.invalid {
	color: hsl(0, 62%, 42%);
}

.error-message {
	max-width: 220px;
	font-size: 0.8em;
	text-align: left;

	color: darkslategray;
}
</style>
