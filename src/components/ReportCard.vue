<template>
  <div class="reportCard">
    <p class="name">{{ data.name }}</p>
    <img src="https://avatars.mds.yandex.net/i?id=a7279c4dc62a962174bc2aa2181d5fa9_l-5288046-images-thumbs&n=13" alt="" class="photo">

    <div class="info">
        <p class="title">{{ data.avto }}</p>
        <p class="subtitle">Авто</p>
    </div>

    <div class="info">
        <p class="title">{{ data.number }}</p>
        <p class="subtitle">Регистрационный номер</p>
    </div>

    <div class="info">
        <p class="title">{{ data.client }}</p>
        <p class="subtitle">Клиент</p>
    </div>

    <div class="info">
        <p class="title">{{ data.cost }}</p>
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