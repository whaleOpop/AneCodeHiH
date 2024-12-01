<template>
	<div class="faq-card">
		<div class="icon">{{ icon }}</div>
		<h3>{{ title }}</h3>
		<ul>
			<li v-for="question in questions" :key="question">{{ question }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		icon: String,
		title: String,
		questions: Array,
	},
}
</script>

<style scoped>
.faq-card {
	background: white;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.icon {
	font-size: 20px;
	color: #5065f6;
}
h3 {
	margin: 10px 0;
	font-size: 18px;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
li {
	font-size: 14px;
	color: #666;
}
</style>
