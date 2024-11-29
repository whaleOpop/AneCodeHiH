import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import Button from "../src/components/ButtonComponent.vue"; 
import CheckBox from "../src/components/CheckBoxComponent.vue"; 
import RadioButton from "../src/components/RadioButton.vue"; 
import Input from "../src/components/Inputcomponent.vue"; 
import Counter from "../src/components/CounterBox.vue"; 

import axiosPlugin from './plugins/axios';

const app = createApp(App);

app.component('Button', Button);
app.component('CheckBox', CheckBox);
app.component('RadioButton', RadioButton);
app.component('Input', Input);
app.component('Counter', Counter);

app.use(router);
app.use(axiosPlugin);
app.mount('#app');