<template>
  <div class="createPage">
    <h1 class="title">Новый отчет</h1>
    <p class="subtitle">Создайте новый отчет о покраске авто</p>

    <div class="createWrapper">
        <div class="form">
            <div class="formContent" style="width: 400px; gap: 10px; display: flex; flex-direction: column;" v-if="step==1">
                <Input 
                :label="'Название отчета'"
                :value="cardData.name"
                @update:value="newValue => cardData.name = newValue"
                :error="v$.cardData.name.$error"
                :placeholder="'Отчет 1'" :maxLength="20"/>
                <div class="divider"></div>
                <div class="formRow">
                    <Input
                    :error="v$.cardData.avto.$error"
                    :value="cardData.avto"
                    @update:value="newValue => cardData.avto = newValue"
                    :label="'Авто'" :placeholder="'Toyota Corolla'"/>
                    <Input :label="'Регистрационный номер'"
                    :value="cardData.number"
                    :error="v$.cardData.number.$error"
                    @update:value="newValue => cardData.number = newValue"
                    :placeholder="'0АБВ12 777'" :maxLength="9"/>
                </div>
                <div class="divider"></div>
                <div class="formRow">
                    <Input :label="'Клиент'"
                    :value="cardData.client"
                    :error="v$.cardData.client.$error"
                    @update:value="newValue => cardData.client = newValue"
                    :placeholder="'Иван Иванов'"/>
                    <Input :label="'Телефон клиента'"
                    :value="cardData.clientPhone"
                    :error="v$.cardData.clientPhone.$error"
                    @update:value="newValue => cardData.clientPhone = newValue"
                     :placeholder="'89151234567'" :type="tel"/>
                    <Input :label="'Email клиента'"
                    :value="cardData.clientEmail"
                    :error="v$.cardData.clientEmail.$error"
                    @update:value="newValue => cardData.clientEmail = newValue"
                    :placeholder="'user@mail.ru'" :type="email"/>
                </div>
            </div>

            <div class="formContent" style="gap: 20px; display: flex; flex-direction: column;" v-if="step==2">
                <p class="label">Фото автомобиля</p>
                <div class="formRow" style="gap: 7px;">
                    <div class="addPhoto" @click="triggerFileInput" :style="{ borderColor: v$.cardData.photos.$error ? 'var(--colors-red)' : '' }">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.28576 5.71429V10H5.71433V5.71429H10V4.28571H5.71433V0H4.28576V4.28571H0V5.71429H4.28576Z" fill="#242940" />
                        </svg>
                        <input type="file" accept="image/*" multiple @change="addPhotos" ref="fileInput" style="display: none;" />
                    </div>
                    <div class="photo" v-for="(photo, index) in cardData.photos" :key="index">
                        <img :src="photo" alt="Uploaded photo" @click="confirmAndRemove(index)">
                    </div>
                </div>
                <div class="divider"></div>
                <p class="label"  :style="{ color: v$.cardData.details.$error ? 'var(--colors-red)' : '' }">Выберите детали, необходимые к покраске</p>
                <div class="formRow">
                    <div class="formColumn">
                        <p class="label">Крылья</p>
                        <CheckBox @click="addToDetails('Правое переднее крыло')" :label="'Правое переднее крыло'" :checked="isInDetails('Правое переднее крыло')"/>
                        <CheckBox @click="addToDetails('Левое переднее крыло')" :label="'Левое переднее крыло'" :checked="isInDetails('Левое переднее крыло')"/>
                        <CheckBox @click="addToDetails('Правое заднее крыло')" :label="'Правое заднее крыло'" :checked="isInDetails('Правое заднее крыло')"/>
                        <CheckBox @click="addToDetails('Левое заднее крыло')" :label="'Левое заднее крыло'" :checked="isInDetails('Левое заднее крыло')"/>
                    </div>
                    <div class="formColumn">
                        <p class="label">Двери</p>
                        <CheckBox @click="addToDetails('Правая передняя дверь')" :label="'Правая передняя дверь'" :checked="isInDetails('Правая передняя дверь')"/>
                        <CheckBox @click="addToDetails('Левая передняя дверь')" :label="'Левая передняя дверь'" :checked="isInDetails('Левая передняя дверь')"/>
                        <CheckBox @click="addToDetails('Правая задняя дверь')" :label="'Правая задняя дверь'" :checked="isInDetails('Правая задняя дверь')"/>
                        <CheckBox @click="addToDetails('Левая задняя дверь')" :label="'Левая задняя дверь'" :checked="isInDetails('Левая задняя дверь')"/>
                    </div>
                    <div class="formColumn">
                        <p class="label">Стойки</p>
                        <CheckBox @click="addToDetails('Правая передняя стойка')" :label="'Правая передняя стойка'" :checked="isInDetails('Правая передняя стойка')"/>
                        <CheckBox @click="addToDetails('Левая передняя стойка')" :label="'Левая передняя стойка'" :checked="isInDetails('Левая передняя стойка')"/>
                        <CheckBox @click="addToDetails('Правая задняя стойка')" :label="'Правая задняя стойка'" :checked="isInDetails('Правая задняя стойка')"/>
                        <CheckBox @click="addToDetails('Левая задняя стойка')" :label="'Левая задняя стойка'" :checked="isInDetails('Левая задняя стойка')"/>
                    </div>

                </div>
                <div class="formRow">
                    <Counter :error="v$.cardData.disks.$error" :value="cardData.disks" @update:value="newValue => cardData.disks = newValue" style="width: 165px;" :label="'Диски'"/>
                    <Counter :error="v$.cardData.mirrors.$error" :value="cardData.mirrors" @update:value="newValue => cardData.mirrors = newValue" :label="'Зеркала'"/>
                </div>
                <div class="formRow">
                    <div class="formColumn" style="width: 165px;">
                        <p class="label">Другое</p>
                        <CheckBox @click="addToDetails('Капот')" :label="'Капот'" :checked="isInDetails('Капот')"/>
                        <CheckBox @click="addToDetails('Багажник')" :label="'Багажник'" :checked="isInDetails('Багажник')"/>
                        <CheckBox @click="addToDetails('Крыша')" :label="'Крыша'" :checked="isInDetails('Крыша')"/>
                        <CheckBox @click="addToDetails('Решетка радиатора')" :label="'Решетка радиатора'" :checked="isInDetails('Решетка радиатора')"/>
                    </div>
                    <div class="formColumn">
                        <Counter :error="v$.cardData.lamps.$error" :value="cardData.lamps" @update:value="newValue => cardData.lamps = newValue" style="width: 165px;" :label="'Фары'"/>
                        <Counter :error="v$.cardData.porogi.$error" :value="cardData.porogi" @update:value="newValue => cardData.porogi = newValue" style="width: 165px;" :label="'Пороги'"/>
                    </div>
                    <div class="formColumn">
                        <p class="label">Бампер</p>
                        <CheckBox @click="addToDetails('Передний бампер')" :label="'Передний'" :checked="isInDetails('Передний бампер')"/>
                        <CheckBox @click="addToDetails('Задний бампер')" :label="'Задний'" :checked="isInDetails('Задний бампер')"/>
                    </div>

                </div>
            </div>

            <div class="formContent" style="gap: 20px; display: flex; flex-direction: column;" v-if="step==3">
                <div class="formRow">
                    <Counter :error="v$.cardData.fakelWidth.$error" :value="cardData.fakelWidth" @update:value="newValue => cardData.fakelWidth = newValue" style="width: 165px;" :label="'Ширина факела (м)'"/>
                    <Counter :error="v$.cardData.fakelVilet.$error" :value="cardData.fakelVilet" @update:value="newValue => cardData.fakelVilet = newValue" :label="'Вылет факела (м)'"/>
                </div>
                <div class="divider"></div>
                <div class="formColumn">
                    <p class="label">Количество слоев</p>
                    <div class="formRow">
                        <RadioButton :label="'1'" :checked="cardData.sloi==1" @click="cardData.sloi=1"/>
                        <RadioButton :label="'2'" :checked="cardData.sloi==2" @click="cardData.sloi=2"/>
                        <RadioButton :label="'3'" :checked="cardData.sloi==3" @click="cardData.sloi=3"/>
                    </div>
                </div>
                
                <div class="formRow">
                    <Counter :error="v$.cardData.rashodLKM.$error" :value="cardData.rashodLKM" @update:value="newValue => cardData.rashodLKM = newValue" style="width: 165px;" :label="'Расход ЛКМ (л)'"/>
                    <Counter :error="v$.cardData.trud.$error" :value="cardData.trud" @update:value="newValue => cardData.trud = newValue" :label="'Трудоемкость (минуты)'"/>
                </div>
                <div class="divider"></div>
                <div class="formRow">
                    <Counter :error="v$.cardData.Skapot.$error" :value="cardData.Skapot" @update:value="newValue => cardData.Skapot = newValue" style="width: 165px;" :label="'Площадь капота (м2)'"/>
                    <Counter :error="v$.cardData.Sdver.$error" :value="cardData.Sdver" @update:value="newValue => cardData.Sdver = newValue" style="width: 165px;" :label="'Площадь пер. двери (м2)'"/>
                    <Counter :error="v$.cardData.Sbagaz.$error" :value="cardData.Sbagaz" @update:value="newValue => cardData.Sbagaz = newValue" :label="'Площадь багажника (м2)'"/>
                </div>
                <div class="divider"></div>
                <div class="formRow">
                    <Input :error="v$.cardData.costLKM.$error" :value="cardData.costLKM" @update:value="newValue => cardData.costLKM = newValue" :label="'Стоимость 1л ЛКМ (₽)'" :placeholder="'200'"/>
                    <Input :error="v$.cardData.costHour.$error" :value="cardData.costHour" @update:value="newValue => cardData.costHour = newValue" :label="'Стоимость 1 нормо-часа (₽)'" :placeholder="'300'"/>
                </div>
            </div>
            
            <div class="bottoms">
                <div class="stepper">
                    <div class="lines" v-if="step==1">
                        <div class="active" style="width: 50px;"></div>
                        <div class="disabled" style="width: 100px;"></div>
                    </div>
                    <div class="lines" v-if="step==2">
                        <div class="active" style="width: 100px;"></div>
                        <div class="disabled" style="width: 50px;"></div>
                    </div>
                    <div class="lines" v-if="step==3">
                        <div class="active" style="width: 150px;"></div>
                        <div class="disabled" style="width: 0;"></div>
                    </div>
                    <p class="steps">{{ step }}/3</p>
                </div>
                <div class="actions">
                    <Button v-if="step>1" :type="3" @click="step--" :label="'Назад'"/>
                    <Button :type="2" @click="nextStep()" :label="'Следующий шаг'"/>
                </div>
            </div>
            
        </div>
        <div class="preview">
            <ReportCard :data="cardData"/>
            <!-- {{ cardData }} -->
        </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, integer, email, maxValue } from '@vuelidate/validators'

import ReportCard from "../../src/components/ReportCard.vue"; 
export default {
    setup () {
        return { v$: useVuelidate() }
    },
    components: { ReportCard },
    data () {
        return {
            step: 3,
            cardData: {
                name: '',
                avto: '',
                number: '',
                client: '',
                cost: 'Отобразится после анализа',
                clientPhone: '',
                clientEmail: '',

                details:[],
                disks: 0,
                mirrors: 0,
                lamps: 0,
                porogi: 0,

                fakelWidth: 0.0,
                fakelVilet: 0.0,
                sloi: 1,
                rashodLKM: 0.0,
                trud: 0.0,
                Skapot: 0.0,
                Sdver: 0.0,
                Sbagaz: 0.0,
                costLKM: '',
                costHour: '',

                photos: [],
            },
        }
    },
    validations () {
        return {
            cardData: {
                name: { required },
                avto: { required },
                number: { required },
                client: { required },
                clientPhone: { required, integer },
                clientEmail: { required, email },

                details: { required },
                disks: { integer, maxValue: maxValue(4), },
                mirrors: { integer, maxValue: maxValue(2), },
                lamps: { integer, maxValue: maxValue(4), },
                porogi: { integer, maxValue: maxValue(2), },
                photos: { required },

                details: { required },
                disks: { integer, maxValue: maxValue(4), },
                mirrors: { integer, maxValue: maxValue(2), },
                lamps: { integer, maxValue: maxValue(4), },
                porogi: { integer, maxValue: maxValue(2), },
                photos: { required },

                fakelWidth: { required },
                fakelVilet: { required },
                sloi: { required },
                rashodLKM: { required },
                trud: { required },
                Skapot: { required },
                Sdver: { required },
                Sbagaz: { required },
                costLKM: { required, integer },
                costHour: { required, integer },
            },
        }
    },
    methods:{
        addToDetails(entity) {
            const index = this.cardData.details.indexOf(entity);
            if (index !== -1) {
                this.cardData.details.splice(index, 1);
            } else {
                this.cardData.details.push(entity);
            }
        },
        isInDetails(entity) {
            return this.cardData.details.includes(entity);
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        addPhotos(event) {
            const files = Array.from(event.target.files);
            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                this.cardData.photos.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        },
        confirmAndRemove(index) {
            if (confirm("Вы уверены, что хотите удалить это изображение?")) {
                this.cardData.photos.splice(index, 1);
            }
        },
        async nextStep() {
            if (this.step === 1) {
                this.v$.cardData.name.$touch();
                this.v$.cardData.avto.$touch();
                this.v$.cardData.number.$touch();
                this.v$.cardData.client.$touch();
                this.v$.cardData.clientEmail.$touch();
                this.v$.cardData.clientPhone.$touch();
                if (
                    this.v$.cardData.name.$error ||
                    this.v$.cardData.avto.$error ||
                    this.v$.cardData.number.$error ||
                    this.v$.cardData.client.$error ||
                    this.v$.cardData.clientEmail.$error ||
                    this.v$.cardData.clientPhone.$error
                ) {
                    alert("Корректно заполните все обязательные поля.");
                    return;
                }

                this.step = 2;
            }

            if (this.step === 2) {
                this.v$.cardData.details.$touch();
                this.v$.cardData.disks.$touch();
                this.v$.cardData.mirrors.$touch();
                this.v$.cardData.lamps.$touch();
                this.v$.cardData.porogi.$touch();
                this.v$.cardData.photos.$touch();
                if (
                    this.v$.cardData.details.$error ||
                    this.v$.cardData.disks.$error ||
                    this.v$.cardData.mirrors.$error ||
                    this.v$.cardData.lamps.$error ||
                    this.v$.cardData.porogi.$error ||
                    this.v$.cardData.photos.$error
                ) {
                    alert("Корректно заполните все обязательные поля.");
                    return;
                }

                this.step = 3;
            }

            if (this.step === 3) {
                this.v$.cardData.fakelWidth.$touch();
                this.v$.cardData.fakelVilet.$touch();
                this.v$.cardData.sloi.$touch();
                this.v$.cardData.rashodLKM.$touch();
                this.v$.cardData.trud.$touch();
                this.v$.cardData.Skapot.$touch();
                this.v$.cardData.Sdver.$touch();
                this.v$.cardData.Sbagaz.$touch();
                this.v$.cardData.costLKM.$touch();
                this.v$.cardData.costHour.$touch();
                if (
                    this.v$.cardData.fakelWidth.$error ||
                    this.v$.cardData.fakelVilet.$error ||
                    this.v$.cardData.sloi.$error ||
                    this.v$.cardData.rashodLKM.$error ||
                    this.v$.cardData.trud.$error ||
                    this.v$.cardData.Skapot.$error ||
                    this.v$.cardData.Sdver.$error ||
                    this.v$.cardData.Sbagaz.$error ||
                    this.v$.cardData.costLKM.$error ||
                    this.v$.cardData.costHour.$error
                ) {
                    alert("Корректно заполните все обязательные поля.");
                    return;
                }

                this.step = 4;
            }
        },
    }
}
</script>

<style scoped>
.addPhoto:hover{
    cursor: pointer;
    background-color: var(--colors-white);
}
.photo img:hover{
    cursor: pointer;
    filter: brightness(70%);
}
.photo{
    width: 100px;
    aspect-ratio: 1;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid transparent;
}
.photo img{
    width: 100px;
    aspect-ratio: 1;
    object-fit: cover;
}
.addPhoto{
    width: 100px;
    aspect-ratio: 1;
    border: 1px solid var(--secondary-accent);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.addPhoto svg path{
    fill: var(--secondary-accent);
}
.label{
    font-size: 12px;
    color: var(--colors-black);
    margin: 0;
}
.actions{
    display: flex;
    gap: 10px;
}
.steps{
    color: #535C69;
    font-weight: 200 !important;
    margin: 0;
    font-size: 10px;
}
.bottoms{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.lines{
    width: 150px;
    display: flex;
    gap: 5px;
}
.active{
    height: 3px;
    border-radius: 1.5px;
    background-color: var(--main-accent);
}
.disabled{
    height: 3px;
    border-radius: 1.5px;
    background-color: #D8DDE3;
}
.formRow{
    display: flex;
    gap: 20px;
    max-width: 640px;
    flex-wrap: wrap;
}
.formColumn{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.divider{
    height: 1px;
    width: 100%;
    background-color: #EBEDF4;
}
.form{
    background-color: #ffffff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}
.createWrapper{
    display: flex;
    gap: 30px;
    margin-top: 44px;
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