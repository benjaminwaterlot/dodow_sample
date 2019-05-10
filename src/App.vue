<template>
	<div id="app">
		<h1>Jeu concours</h1>
		<!-- <p>Gagnez un Dodow !</p> -->
		<Form></Form>
	</div>
</template>

<script>
import Form from "@/components/Form/Form.vue";
export default {
	name: "app",
	components: { Form }
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	padding: 0em;
}
</style>
