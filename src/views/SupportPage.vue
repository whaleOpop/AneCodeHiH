<template>
    <div class="supportPage">
      <h1 class="title">Поддержка</h1>
      <p class="subtitle">Нашли ошибку или баг? Заполните форму обратной связи</p>

      <div class="form">

        <Input :label="'Ваше имя'"
        :value="name"
        :error="v$.name.$error"
        @update:value="newValue => name = newValue"
        :placeholder="'Иван'"/>

        <div class="formRow">
            <RadioButton :label="'Баг'" :checked="type==1" @click="type=1"/>
            <RadioButton :label="'Ошибка орфографии'" :checked="type==2" @click="type=2"/>
            <RadioButton :label="'Ошибка сервера'" :checked="type==3" @click="type=3"/>
            <RadioButton :label="'Другое'" :checked="type==4" @click="type=4"/>
        </div>


        <Input :label="'Сообщение'"
        :value="problem"
        :error="v$.problem.$error"
        @update:value="newValue => problem = newValue"
        :placeholder="'Сообщение'"/>


        <div class="actions">
            <Button :type="2" :label="'Отправить'" @click="send()"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

  export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return{
            name: '',
            type: 1,
            problem: '',
        }
    },
    validations () {
        return{
            name: { required },
            type: { required },
            problem: { required },
        }
    },
    methods:{
        async send(){
            const result = await this.v$.$validate()
        }
    }
  }
  </script>
  
  <style scoped>
  .actions{
    display: flex;
    justify-content: end;
  }
  .form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #ffffff;
    width: 500px;
    margin-top: 44px;
    border-radius: 7px;
  }
    .formRow{
        display: flex;
        gap: 20px;
        max-width: 640px;
        flex-wrap: wrap;
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