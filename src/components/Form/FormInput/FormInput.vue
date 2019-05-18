<template>
	<div class="form-input-wrapper">
		<input
			class="form-input"
			:class="state.valid ? '' : 'invalid'"
			type="text"
			:placeholder="placeholder"
			:value="formattedValue"
			@input="handleInput"
		>
		<div class="error-container">
			<p class="error-message" v-if="!state.valid">{{ state.message }}</p>
		</div>
	</div>
</template>

<script>
import { debounce } from "lodash";

export default {
	name: "FormInput",
	props: {
		fieldIndex: { type: Number, required: true },
		placeholder: { type: String, required: true },
		content: { type: String, required: true },
		validator: { type: Function, required: false, default: null },
		state: { type: Object, required: true },
		formatter: { type: Function, required: false, default: null }
	},
	data: function() {
		return {
			delayedValidation: null
		};
	},
	mounted: function() {
		this.delayedValidation = debounce(this.validateInput, 350);
	},
	methods: {
		handleInput: function(e) {
			// Remove hyphens from the input, we want only our hyphen.
			const newValue = e.target.value.replace(/-/g, "");

			// Update this input's content through the Form parent.
			this.$emit("inputEvent", [this.fieldIndex, newValue]);

			// Call validation through the Form parent.
			this.delayedValidation(this.content);
		},
		validateInput: function() {
			// Request a validation of this field from the Form parent.
			this.$emit("validationEvent", this.fieldIndex);
		}
	},
	computed: {
		formattedValue: function() {
			return this.formatter ? this.formatter(this.content) : this.content;
		}
	}
};
</script>

<style scoped>
.form-input-wrapper {
	margin: 0.8em;
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
