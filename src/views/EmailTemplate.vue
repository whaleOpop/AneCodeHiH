<template>
	<div class="email-template">
		<Header />
		<Content
			:title="contentTitle"
			:description="contentDescription"
			:imageSrc="contentImageSrc"
		/>
		<Footer :links="footerLinks" />
	</div>
</template>

<script>
import Content from './ContentLetter.vue'
import Footer from './FooterLetter.vue'
import Header from './HeaderLetter.vue'

export default {
	name: 'EmailTemplate',
	components: {
		Header,
		Content,
		Footer,
	},
	data() {
		return {
			contentTitle: 'Ваш отчёт готов!',
			contentDescription:
				'Ниже Вы сможете ознакомиться с кратким описанием отчёта и скачать его.',
			contentImageSrc:
				'https://fpzftkk.stripocdn.email/content/guids/CABINET_9279b1d3c53685b75cecfd86653ca7e775f92c835504a6a6f529cf68a8c6d5d8/images/icons8dokument100.png',
			footerLinks: [
				{ text: 'Партнёры', href: 'https://rosatom-career.ru/' },
				{ text: 'Помощь', href: 'http://147.45.254.226:8080/support/' },
				{ text: 'О нас', href: 'http://147.45.254.226:8080/team/' },
			],
		}
	},
}
</script>

<style scoped>
.email-template {
	font-family: Arial, Helvetica, sans-serif;
}
</style>
