<template>
	<div class="form-input-wrapper">
		<input
			class="form-input"
			type="text"
			:placeholder="placeholder"
			v-model="field_value"
			@blur="validate"
		>
		<p v-if="field_state.valid === false">{{ field_state.message }}</p>
	</div>
</template>

<script>
export default {
	name: "FormInput",
	components: {},
	data: function() {
		return {
			field_value: this.initial_value,
			field_state: { valid: true, message: "" }
		};
	},
	props: {
		placeholder: { type: String, required: true },
		initial_value: { type: String, required: false },
		field_validator: { type: Function, required: false }
	},
	methods: {
		validate: function() {
			const should_be_validated = this.field_validator !== undefined;

			this.field_state = should_be_validated
				? this.field_validator(this.field_value)
				: { valid: true, message: "" };
		}
	}
};
</script>

<style scoped>
.form-input-wrapper {
}
.form-input {
	padding: 0.5em;
	margin: 0.5em;
	min-width: 12em;

	font-size: 1.1em;
	font-weight: 500;
	color: hsl(0, 0%, 30%);
	background-color: hsl(180, 29%, 94%);
	border-radius: 0.2em;
	border: none;
	outline: none;

	transition: 0.2s all ease-in-out;
}
.form-input::placeholder {
	color: hsl(0, 0%, 63%);
	font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.form-input:focus {
	background-color: white;
	box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.2);
}
</style>
