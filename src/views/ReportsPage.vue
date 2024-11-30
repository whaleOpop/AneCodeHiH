<template>
  <div class="reportsPage">
    <h1 class="title">Мои отчеты</h1>
    <p class="subtitle">Все отчеты клиентов по покраске автомобилей</p>

    <div class="reportsRow">
        <div class="addNew" @click="this.$router.push('/dashboard/create')">
            <img src="../assets/icons/add.svg" alt="">
        </div>
        <ReportCard v-for="report in reports" :key="report.id" :data="report"/>
    </div>
  </div>
</template>

<script>
import ReportCard from "../../src/components/ReportCard.vue"; 
export default {
    components: { ReportCard },
    data () {
        return {
            reports:[
            {
                    id: 1,
                    name: 'Отчет о матане',
                    avto: 'Bmw X6 competition',
                    number: '2SFD34 797',
                    client: 'Иван Белов',
                    cost: '12 000',
                },
                {
                    id: 1,
                    name: 'Отчет о матане',
                    avto: 'Bmw X6 competition',
                    number: '2SFD34 797',
                    client: 'Иван Белов',
                    cost: '12 000',
                },
                {
                    id: 1,
                    name: 'Отчет о матане',
                    avto: 'Bmw X6 competition',
                    number: '2SFD34 797',
                    client: 'Иван Белов',
                    cost: '12 000',
                },
                {
                    id: 1,
                    name: 'Отчет о матане',
                    avto: 'Bmw X6 competition',
                    number: '2SFD34 797',
                    client: 'Иван Белов',
                    cost: '12 000',
                }
            ]
        }
    },
}
</script>

<style scoped>
.addNew:hover{
    background-color: rgba(83, 103, 173, 0.09);
}
.addNew{
    height: 490px;
    width: 330px;
    border: 2px dashed var(--main-accent);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.reportsRow{
    margin-top: 44px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.title{
    font-weight: 700 !important;
    font-size: 30px;
    color: var(--colors-black);
    margin: 0;
}
.subtitle{
    font-weight: 700 !important;
    font-size: 15px;
    color: var(--secondary-accent);
    margin: 0;
}
</style>