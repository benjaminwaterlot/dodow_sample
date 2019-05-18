<template>
	<div>
		<h2 class="recap-title">Bien reçu !</h2>
		<p>Vous êtes inscrit pour le jeu concours. Merci de votre participation !</p>
		<div class="divider"/>
		<div class="field" v-for="field in formData" :key="field.placeholder">
			<p class="field-name">{{ field.placeholder }}</p>
			<p class="field-content">{{ field.content }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Recap",
	props: { formData: { type: Array, required: true } }
};
</script>

<style scoped>
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
