<template>
	<div>
		<div class="close-wrapper">
			<img src="close.svg" alt="close icon" class="close-icon" @click="closeRecap">
		</div>
		<section class="content">
			<h2 class="recap-title">Bien reçu !</h2>
			<p>Vous êtes inscrit pour le jeu concours. Merci de votre participation !</p>
			<div class="divider"/>
			<div class="field" v-for="field in formData" :key="field.placeholder">
				<p class="field-name">{{ field.placeholder }}</p>
				<p class="field-content">{{ field.content }}</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Recap",
	props: { formData: { type: Array, required: true } },
	methods: {
		closeRecap: function() {
			this.$emit("resetForm");
		}
	}
};
</script>

<style scoped>
.close-wrapper {
	display: flex;
	justify-content: flex-start;
}

.close-icon {
	cursor: pointer;
	transition: all 0.3s ease-out;
}

.close-icon:hover,
.close-icon:focus {
	transform: translateY(-3px);
}

.content {
	padding: 3em 1em;
}

.recap-title {
	color: white;
	text-shadow: 2px 1px 0px hsla(0, 0%, 0%, 0.1);
}

.divider {
	margin: 2em auto;
	width: 30%;
	height: 2px;

	background-color: white;
}

.field {
	margin: 1em 0;
}
.field-name {
	font-style: italic;
	opacity: 0.8;
	margin: 0.3em 0.5em;
}
.field-content {
	font-weight: 600;
	margin: 0.3em 0.5em;
}
</style>
