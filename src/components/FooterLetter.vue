<template>
	<footer class="email-footer">
		<table align="center" class="footer-table">
			<tr>
				<td align="center" class="footer-links">
					<a v-for="(link, index) in links" :key="index" :href="link.href">
						{{ link.text }}
					</a>
				</td>
			</tr>
			<tr>
				<td align="center" class="footer-info">
					<p>&copy; 2024 AneCode</p>
				</td>
			</tr>
		</table>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	props: {
		links: {
			type: Array,
			default: () => [
				{ text: 'Партнёры', href: 'https://rosatom-career.ru/' },
				{ text: 'Помощь', href: 'http://147.45.254.226:8080/support' },
				{ text: 'О нас', href: 'http://147.45.254.226:8080/' },
			],
		},
	},
}
</script>

<style scoped>
.email-footer {
	background-color: transparent;
	padding: 20px;
	text-align: center;
}

.footer-links a {
	margin: 0 10px;
	color: #999999;
	text-decoration: none;
	font-size: 12px;
}

.footer-info p {
	font-size: 12px;
	color: #cccccc;
}
</style>
