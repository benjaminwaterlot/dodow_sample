<template>
	<div id="app">
		<div class="app-wrapper">
			<transition name="component-fade" mode="out-in">
				<Form v-if="status === 'ONGOING'" @formSubmitted="handleSubmission"/>
				<Recap v-else-if="status === 'SUBMITTED'" :formData="formData"/>
			</transition>
		</div>
	</div>
</template>

<script>
import Form from "@/components/Form/Form.vue";
import Recap from "@/components/Recap/Recap.vue";

export default {
	name: "app",
	data: function() {
		return {
			status: "ONGOING",
			formData: null
		};
	},
	components: { Form, Recap },
	methods: {
		handleSubmission: function(formData) {
			this.formData = formData;
			this.status = "SUBMITTED";
		}
	}
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
.app-wrapper {
	margin: auto;
	padding: 3em 1em;
	min-height: 500px;

	background-color: hsl(180, 33%, 68%);
	border-radius: 0.3em;
}

.component-fade-enter-active,
.component-fade-leave-active {
	transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
	opacity: 0;
}
</style>
