<template>
	<div id="app">
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
body {
	margin: 0;
	background-image: url("/background.jpg");
}
#app {
	margin: 0;
	padding: 50px;

	font-family: "Avenir", Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
}
* {
	box-sizing: border-box;
}
</style>
