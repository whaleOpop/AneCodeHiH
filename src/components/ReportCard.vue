<template>
  <div class="reportCard">
    <p class="name">{{ data.name || 'Название отчета' }}</p>
    <img v-if="data.photos[0]" :src="data.photos[0]" alt="" class="photo">
    <img v-else src="../assets/noPhoto.jpg" alt="" class="photo">

    <div class="info">
        <p class="title">{{ data.avto || 'Автомобиль' }}</p>
        <p class="subtitle">Авто</p>
    </div>

    <div class="info">
        <p class="title">{{ data.number || 'Номер' }}</p>
        <p class="subtitle">Регистрационный номер</p>
    </div>

    <div class="info">
        <p class="title">{{ data.client || 'Имя Фамилия' }}</p>
        <p class="subtitle">Клиент</p>
    </div>

    <div class="info">
        <p class="title">{{ data.cost || 'Стоимость' }}</p>
        <p class="subtitle">Итоговая стоимость</p>
    </div>

    <div class="download">
        <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style scoped>
.name{
    font-size: 15px;
    color: var(--colors-black);
    font-weight: 700 !important;
    margin: 0;
    margin-top: 20px;
}
.photo{
    width: 100%;
    height: 170px;
    border-radius: 5px;
}
.reportCard{
    height: 490px;
    width: 290px;
    border-radius: 7px;
    background-color: white;
    border: 2px solid white;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
}
.title{
    text-align: start;
    font-size: 16px;
    color: var(--colors-black);
    margin: 0;
}

.subtitle{
    margin: 0;
    text-align: start;
    font-size: 13px;
    color: var(--secondary-accent);
}

.info{
    display: flex;
    flex-direction: column;
    gap: 0px;
}
</style>