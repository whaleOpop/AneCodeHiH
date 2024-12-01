<template>
	<div class="faq-card">
		<div class="icon-wrapper">
			<slot name="icon"></slot>
		</div>
		<h3>{{ title }}</h3>
		<ul>
			<li v-for="(question, index) in questions" :key="index">
				{{ question }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		questions: Array,
	},
}
</script>

<style scoped>
.faq-card {
	border: 1px solid #ccc;
	padding: 16px;
	border-radius: 8px;
}
.icon-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
}
img.icon {
	width: 30px;
	height: 30px;
}
</style>
