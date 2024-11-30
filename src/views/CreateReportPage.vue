<template>
  <div class="createPage">
    <h1 class="title">Новый отчет</h1>
    <p class="subtitle">Создайте новый отчет о покраске авто</p>

    <div class="createWrapper">
        <div class="form">
            <div class="formContent" style="gap: 10px; display: flex; flex-direction: column;" v-if="step==1">
                <Input :label="'Название отчета'" :placeholder="'Отчет 1'" :maxLength="20"/>
                <div class="divider"></div>
                <div class="formRow">
                    <Input :label="'Авто'" :placeholder="'Toyota Corolla'"/>
                    <Input :label="'Регистрационный номер'" :placeholder="'0АБВ12 777'" :maxLength="9"/>
                </div>
                <div class="divider"></div>
                <Input :label="'Клиент'" :placeholder="'Иван Иванов'"/>
                <div class="formRow">
                    <Input :label="'Телефон клиента'" :placeholder="'89151234567'"/>
                    <Input :label="'Email клиента'" :placeholder="'0АБВ12 777'" :maxLength="9"/>
                </div>
            </div>

            <div class="formContent" style="gap: 20px; display: flex; flex-direction: column;" v-if="step==2">
                <p class="label">Фото автомобиля</p>
                <div class="formRow" style="gap: 7px;">
                    <div class="addPhoto">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.28576 5.71429V10H5.71433V5.71429H10V4.28571H5.71433V0H4.28576V4.28571H0V5.71429H4.28576Z" fill="#242940"/>
                        </svg>  
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                    <div class="photo">
                        <img src="https://avatars.mds.yandex.net/i?id=0d0cfb474052d7df1653da51e3ceb1b9_l-7752085-images-thumbs&n=13" alt="">
                    </div>
                </div>
                <div class="divider"></div>
                <p class="label">Выберите детали, необходимые к покраске</p>
                <div class="formRow">
                    <div class="formColumn">
                        <p class="label">Крылья</p>
                        <CheckBox :label="'Правое переднее крыло'" :checked="false"/>
                        <CheckBox :label="'Левое переднее крыло'" :checked="false"/>
                        <CheckBox :label="'Правое заднее крыло'" :checked="false"/>
                        <CheckBox :label="'Левое заднее крыло'" :checked="false"/>
                    </div>
                    <div class="formColumn">
                        <p class="label">Двери</p>
                        <CheckBox :label="'Правая передняя дверь'" :checked="false"/>
                        <CheckBox :label="'Левая передняя дверь'" :checked="false"/>
                        <CheckBox :label="'Правая задняя дверь'" :checked="false"/>
                        <CheckBox :label="'Левая задняя дверь'" :checked="false"/>
                    </div>
                    <div class="formColumn">
                        <p class="label">Стойки</p>
                        <CheckBox :label="'Правая передняя стойка'" :checked="false"/>
                        <CheckBox :label="'Левая передняя стойка'" :checked="false"/>
                        <CheckBox :label="'Правая задняя стойка'" :checked="false"/>
                        <CheckBox :label="'Левая задняя стойка'" :checked="false"/>
                    </div>
                </div>
                <div class="formRow">
                    <Counter style="width: 165px;" :label="'Диски'"/>
                    <Counter :label="'Зеркала'"/>
                </div>
                <div class="formRow">
                    <div class="formColumn" style="width: 165px;">
                        <p class="label">Другое</p>
                        <CheckBox :label="'Капот'" :checked="false"/>
                        <CheckBox :label="'Багажник'" :checked="false"/>
                        <CheckBox :label="'Крыша'" :checked="false"/>
                        <CheckBox :label="'Решетка радиатора'" :checked="false"/>
                    </div>
                    <div class="formColumn">
                        <Counter style="width: 165px;" :label="'Фары'"/>
                        <Counter style="width: 165px;" :label="'Пороги'"/>
                    </div>
                    <div class="formColumn">
                        <p class="label">Бампер</p>
                        <CheckBox :label="'Передний'" :checked="false"/>
                        <CheckBox :label="'Задний'" :checked="false"/>
                    </div>
                </div>
            </div>

            <div class="formContent" style="gap: 20px; display: flex; flex-direction: column;" v-if="step==3">
                <div class="formRow">
                    <Counter style="width: 165px;" :label="'Ширина факела (м)'"/>
                    <Counter :label="'Вылет факела (м)'"/>
                </div>
                <div class="divider"></div>
                <div class="formColumn">
                    <p class="label">Количество слоев</p>
                    <div class="formRow">
                        <RadioButton :label="'1'" :checked="false"/>
                        <RadioButton :label="'2'" :checked="false"/>
                        <RadioButton :label="'3'" :checked="false"/>
                    </div>
                </div>
                
                <div class="formRow">
                    <Counter style="width: 165px;" :label="'Расход ЛКМ (л)'"/>
                    <Counter :label="'Трудоемкость (минуты)'"/>
                </div>
                <div class="divider"></div>
                <div class="formRow">
                    <Counter style="width: 165px;" :label="'Площадь капота (м2)'"/>
                    <Counter style="width: 165px;" :label="'Площадь пер. двери (м2)'"/>
                    <Counter :label="'Площадь багажника (м2)'"/>
                </div>
                <div class="divider"></div>
                <div class="formRow">
                    <Input :label="'Стоимость 1л ЛКМ (₽)'" :placeholder="'200'"/>
                    <Input :label="'Стоимость 1 нормо-часа (₽)'" :placeholder="'300'" :maxLength="9"/>
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
                    <Button :type="2" @click="step++" :label="'Далее'"/>
                </div>
            </div>
        </div>
        <div class="preview">

        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            step: 1,
        }
    },
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