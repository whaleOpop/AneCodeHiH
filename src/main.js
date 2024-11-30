import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axiosPlugin from './plugins/axios';

import Button from "../src/components/ButtonComponent.vue"; 
import CheckBox from "../src/components/CheckBoxComponent.vue"; 
import RadioButton from "../src/components/RadioButton.vue"; 
import Input from "../src/components/Inputcomponent.vue"; 
import Counter from "../src/components/CounterBox.vue"; 


const app = createApp(App);

app.use(axiosPlugin);

app.component('Button', Button);
app.component('CheckBox', CheckBox);
app.component('RadioButton', RadioButton);
app.component('Input', Input);
app.component('Counter', Counter);

app.use(router);
app.mount('#app');