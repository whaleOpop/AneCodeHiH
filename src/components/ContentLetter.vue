<template>
	<main class="email-content">
		<section
			class="content-section"
			:style="{ backgroundColor: backgroundColor }"
		>
			<h1 class="title">{{ title }}</h1>
			<p class="description">{{ description }}</p>
			<img
				v-if="imageSrc"
				:src="imageSrc"
				:alt="imageAlt"
				class="content-image"
			/>
		</section>
	</main>
</template>

<script>
export default {
	name: 'Content',
	props: {
		title: {
			type: String,
			default: 'Ваш отчёт готов!',
		},
		description: {
			type: String,
			default:
				'Ниже Вы сможете ознакомиться с кратким описанием отчёта и скачать его.',
		},
		imageSrc: {
			type: String,
			default: '',
		},
		imageAlt: {
			type: String,
			default: 'Content image',
		},
		backgroundColor: {
			type: String,
			default: '#d9ead3',
		},
	},
}
</script>

<style scoped>
.email-content {
	text-align: center;
	padding: 20px;
}

.content-section {
	border-radius: 5px;
	padding: 15px 20px;
}

.title {
	font-size: 46px;
	color: #333333;
}

.description {
	font-size: 14px;
	color: #333333;
}

.content-image {
	margin-top: 10px;
	width: 120px;
	height: 120px;
}
</style>
