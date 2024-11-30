<template>
  <div class="page">
    <img class="banner" src="../assets/banner.png" alt="" >
    <div class="form">
        <div class="help">
            <p>Есть вопрос?</p>
            <Button :type="2" :label="'Помощь'"/>
        </div>
        <div class="container-form">
            <h1 @click="this.$router.push('/team')">Вход в AneCode</h1>
            <span>Добро пожаловать в AneCode! Пожалуйста, введите<br>данные для входа в систем</span>

            <div class="login">
                <Input 
                :value="login"
                @update:value="newValue => login = newValue"
                :label="'Логин'"
                :error="v$.login.$error"
                :placeholder="'Введите логин'"/>

                <Input 
                :value="pass"
                @update:value="newValue => pass = newValue"
                :label="'Пароль'"
                :error="v$.pass.$error"
                :type="'password'"
                :placeholder="'Введите пароль'"/>

                <!-- <Counter :value="123" :label="'Счётчик говна'"/> -->

                <p class="error-message" v-if="v$.login.$error || v$.pass.$error">Пожалуйста, заполните выделенные поля</p>
            </div>

            <div class="actions">
                <Button :type="1" :label="'Войти в систему'" @click="login_user()"/>
                <p class="or">или</p>
                <Button :type="3" :label="'Войти через Яндекс'"/>
            </div>
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
        return {
            login: '',
            pass: '',
        }
    },
    validations () {
        return {
            login: { required },
            pass: { required },
        }
    },
    methods:{
        async login_user(){
            const result = await this.v$.$validate()
        }
    }
}
</script>

<style scoped>
.page{
    width: 100%;
    padding: 12px;
    height: 100vh;
    display: flex;
    align-items: start;
    box-sizing: border-box;
    overflow: hidden;
}
.banner{
    width: 60%;
    height: 100%;
    background-color: #111112;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    object-fit: cover;
}
.help{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    top: 44px;
    right: 65px;
}
.help p{
    font-size: 12px;
    color: black;
}
.form{
    height: 100vh;
    box-sizing: border-box;
    width: 40%;
}
.container-form{
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
}
h1{
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(102,102,102,1) 35%, rgba(83,103,173,1) 64%, rgba(181,183,203,1) 100%);
    color: transparent;
    background-clip: text;
    font-weight: 700 !important;
    font-size: 36px;
    transition: all .2s ease;
}
h1:hover{
    filter: brightness(80%);
    cursor: pointer;
}
span{
    color: #7A7A7A;
    font-size: 15px;
    font-weight: 400 !important;
    text-align: center;
    width: 380px;
}
.login{
    margin: 55px 0;
    width: 305px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.actions{
    width: 305px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.or{
    margin: 0;
    font-size: 12px;
    color: #7A7A7A;
    text-align: center;
}.error-message{
    margin: 0;
    font-size: 12px;
    color: var(--colors-red);
    text-align: center;
}
</style>