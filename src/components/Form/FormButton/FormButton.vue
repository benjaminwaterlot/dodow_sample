<template>
	<div>
		<button class="form-button">
			<span class="label-text">Valider</span>
			<span class="label-star">⭐</span>
		</button>
	</div>
</template>

<script>
export default {
	name: "FormButton",
	components: {},
	props: { active: { type: Boolean, required: true } },
	data: function() {
		return {};
	},
	mounted: function() {},
	methods: {},
	computed: {}
};
</script>

<style scoped>
.form-button {
	padding: 0.5em 1.5em;

	font-size: 1.1em;
	font-weight: 500;
	color: hsl(180, 33%, 35%);
	background-color: hsl(180, 33%, 90%);
	border-radius: 0.2em;
	outline: none;
	border: none;
	cursor: pointer;

	transition: 0.2s all ease-out;
}

.form-button:hover,
.form-button:focus {
	background-color: hsl(180, 33%, 94%);
	box-shadow: 1px 1px 6px hsla(0, 0%, 0%, 0.25);
	transform: rotate(-4deg);
}
.form-button:focus {
}

.label-text {
	font-size: 1.1em;
}
.label-star {
	margin-left: .8em;
}
</style>
