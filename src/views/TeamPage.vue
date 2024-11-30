<template>
  <div class="teamPage">
    <div style="display: flex; gap: 10px; align-items: center;">
        <Button @click="this.$router.push('/')" :label="'< На сайт'" :type="3"/>
        <h1>Команда AneCode</h1>
    </div>
    
    <div class="members">

        <div class="human">
            <img src="https://s1.1zoom.ru/b5050/21/231582-Sepik_2048x1152.jpg" alt="">
            <div class="name">Никита</div>
            <div class="quote">
                Backend dev.
            </div>
            <div class="aspects">
                <div class="skill">С/С++</div>
                <div class="skill">Dart</div>
                <div class="skill">Java</div>
                <div class="skill">Docker</div>
            </div>
        </div>

        <div class="human">
            <img src="https://avatars.mds.yandex.net/i?id=7a0a91c5a0d3faf537c1360d8cb0995a_l-7999331-images-thumbs&n=13" alt="">
            <div class="name">Артём</div>
            <div class="quote">
                Frontend dev.
            </div>
            <div class="aspects">
                <div class="skill">Vue3</div>
                <div class="skill">Ui/Ux design</div>
                <div class="skill">Three.js</div>
            </div>
        </div>

        <div class="human">
            <img src="https://avatars.mds.yandex.net/i?id=e2cec7be73a29d38bcf81705b7fd9510_l-5226832-images-thumbs&n=13" alt="">
            <div class="name">Ибрагим</div>
            <div class="quote">
                Backend dev.
            </div>
            <div class="aspects">
                <div class="skill">Python</div>
                <div class="skill">FastAPI</div>
                <div class="skill">SQL</div>
            </div>
        </div>

        <div class="human">
            <img src="https://otvet.imgsmail.ru/download/304422029_76e61d25d17e0ec8b958b05283c93898_800.jpg" alt="">
            <div class="name">Владислав</div>
            <div class="quote">
                Backend dev.
            </div>
            <div class="aspects">
                <div class="skill">Django</div>
                <div class="skill">C/C++</div>
            </div>
        </div>

        <div class="human">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/1768204581714968895/F4B21A457320B142343D3F667229CF91146DA710/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="">
            <div class="name">Алексей</div>
            <div class="quote">
                Frontend dev.
            </div>
            <div class="aspects">
                <div class="skill">Presentation</div>
                <div class="skill">Html/Css</div>
            </div>
        </div>

    </div>

    <div class="contacts">
        <p class="option">© 2024 AneCode</p>
        <p class="option">+7 (915) 334 22 64 (Артём)</p>
        <p class="option">tg: @deeja_y (Артём)</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.option{
    font-size: 12px;
}
.contacts{
    position: fixed;
    bottom: 20px;
    display: flex;
    gap: 30px;
    align-items: center;
}
.members{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}
.teamPage{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.human{
    height: 320px;
    width: 250px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
}
.human:hover{
    border: 1px solid var(--secondary-accent);
}
.human img{
    width: 120px;
    aspect-ratio: 1;
    background-color: red;
    border-radius: 60px;
    object-fit: cover;
}
.name{
    margin-top: 40px;
    font-size: 30px;
    color: var(--colors-black);
}
.quote{
    font-size: 12px;
    text-align: center;
    color: var(--secondary-accent);
}
.aspects{
    gap: 5px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.skill{
    font-size: 12px;
    height: 30px;
    border: 1px solid var(--secondary-accent);
    border-radius: 15px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: start;
}
.skill:hover{
    border: 1px solid var(--main-accent);
}
</style>