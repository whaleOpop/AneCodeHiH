<template>
	<div class="help-page">
		<SideBar />
		<main>
			<Header />
			<div class="helpPage">
				<h1 class="title">Помощь</h1>
				<p class="subtitle">Ответы на часто задаваемые вопросы</p>
			</div>
			<div class="FaqCard">
				<FaqCard
					title="Авторизация"
					:questions="[
						'Не получается войти?',
						'Как изменить логин/пароль?',
						'Как подтвердить свою электронную почту после регистрации?',
					]"
				>
					<template #icon>
						<img
							src="@/assets/icons/person.svg"
							alt="Пользователь"
							class="icon"
						/>
					</template>
				</FaqCard>
				<FaqCard
					title="Отчёт"
					:questions="[
						'Как создать новый отчёт?',
						'Какие компоненты нужны для заполнения отчёта?',
					]"
				>
					<template #icon>
						<img src="@/assets/icons/report.svg" alt="Отчёт" class="icon" />
					</template>
				</FaqCard>
				<FaqCard
					title="Смета"
					:questions="[
						'Как получить отчёт о расходах на услугу?',
						'Куда мне придёт смета?',
						'В каких форматах приходит расчёт?',
					]"
				>
					<template #icon>
						<img src="@/assets/icons/estimate.svg" alt="Смета" class="icon" />
					</template>
				</FaqCard>
			</div>
		</main>
	</div>
</template>

<script>
import FaqCard from './FAQCardComponent.vue'
import Header from './HelpHeaderComponent.vue'
import Sidebar from './SideBar.vue'

export default {
	components: {
		Sidebar,
		Header,
		FaqCard,
	},
}
</script>

<style scoped>
.helpPage {
	margin-bottom: 20px;
}
.title {
	font-weight: 700 !important;
	font-size: 30px;
	color: var(--colors-black);
	margin: 0;
}
.subtitle {
	font-weight: 700 !important;
	font-size: 15px;
	color: var(--secondary-accent);
	margin: 0;
}

.help-page {
	display: flex;
}
main {
	flex: 1;
	padding: 20px;
}
.faq-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
}
</style>
