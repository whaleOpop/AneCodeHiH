<template>
	<header class="email-header">
		<table align="center" class="header-table">
			<tr>
				<td align="center">
					<img :src="logoSrc" :alt="logoAlt" :title="logoTitle" class="logo" />
				</td>
			</tr>
		</table>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: {
		logoSrc: {
			type: String,
			default:
				'https://fpzftkk.stripocdn.email/content/guids/CABINET_9279b1d3c53685b75cecfd86653ca7e775f92c835504a6a6f529cf68a8c6d5d8/images/anekod2photoroom.png',
		},
		logoAlt: {
			type: String,
			default: 'Logo',
		},
		logoTitle: {
			type: String,
			default: 'Logo',
		},
	},
}
</script>

<style scoped>
.email-header {
	background-color: #fafafa;
	text-align: center;
	padding: 10px 20px;
}

.logo {
	display: block;
	width: 200px;
	height: 40px;
}
</style>
