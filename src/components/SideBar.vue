<template>
    <div class="sideBarWrapper">
        <div class="sidebar">
            <div class="logo" style="margin-top: 30px;">
                <img src="../assets/logo.svg" alt="">
            </div>

            <div class="divider" style="margin: 20px 0"></div>

            <div class="employee">
                <div class="avatar">
                    <img src="https://st40.stblizko.ru/images/product/272/978/983_big.JPG" alt="">
                </div>
                <div class="naming">
                    <h3 class="name">Мария Х.</h3>
                    <p class="status">Босс</p>
                </div>
            </div>

            <div class="clock"> 
                <div class="clockIcon">
                    <img src="../assets/icons/clock.svg" alt="">
                </div>
                <div class="clockInfo">
                    <div class="time">12:41:23</div>
                    <div class="date">8 Июня, 2024</div>
                </div>
            </div>

            <div class="nav">
                <div class="navButton"  @click="this.$router.push('/dashboard/main')" :style="{ backgroundColor: this.$route.path === '/dashboard/main' ? '#F4F5FB' : '#ffffff' }">

                    <svg class="navIcon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/dashboard/main' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 0.842773L19.6586 8.41896L18.3416 9.92412L10.0001 3.50031L1.65856 9.92412L0.341553 8.41896L10.0001 0.842773Z" fill="#5367AD"/>
                        <path :style="{ fill: this.$route.path === '/dashboard/main' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" d="M10.0001 0.842773L18.0715 7.17405V18.0003H12.0001V13.0003H8.00006V18.0003H2.00006V7.11802L10.0001 0.842773Z" fill="#5367AD"/>
                    </svg>


                    <div class="navName" :style="{ color: this.$route.path === '/dashboard/main' ? 'var(--main-accent)' : 'var(--secondary-accent)' }">
                        Отчеты
                    </div>
                    <div class="ptr" v-if="this.$route.path === '/dashboard/main'" :style="{ backgroundColor: this.$route.path === '/dashboard/main' ? 'var(--main-accent)' : 'var(--secondary-accent)' }"></div>
                </div>

                <div class="divider"></div>

                <div class="navButton" @click="this.$router.push('/dashboard/help')" :style="{ backgroundColor: this.$route.path === '/dashboard/help' ? '#F4F5FB' : '#ffffff' }">

                    <svg class="navIcon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 0.842773L19.6586 8.41896L18.3416 9.92412L10.0001 3.50031L1.65856 9.92412L0.341553 8.41896L10.0001 0.842773Z" fill="#5367AD"/>
                        <path :style="{ fill: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" d="M10.0001 0.842773L18.0715 7.17405V18.0003H12.0001V13.0003H8.00006V18.0003H2.00006V7.11802L10.0001 0.842773Z" fill="#5367AD"/>
                    </svg>


                    <div class="navName" :style="{ color: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }">
                        Помощь
                    </div>
                    <div class="ptr" v-if="this.$route.path === '/dashboard/help'" :style="{ backgroundColor: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }"></div>
                </div>

                <div class="navButton" @click="this.$router.push('/dashboard/support')" :style="{ backgroundColor: this.$route.path === '/dashboard/support' ? '#F4F5FB' : '#ffffff' }">

                    <svg class="navIcon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 0.842773L19.6586 8.41896L18.3416 9.92412L10.0001 3.50031L1.65856 9.92412L0.341553 8.41896L10.0001 0.842773Z" fill="#5367AD"/>
                        <path :style="{ fill: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" d="M10.0001 0.842773L18.0715 7.17405V18.0003H12.0001V13.0003H8.00006V18.0003H2.00006V7.11802L10.0001 0.842773Z" fill="#5367AD"/>
                    </svg>


                    <div class="navName" :style="{ color: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }">
                        Поддержка
                    </div>
                    <div class="ptr" v-if="this.$route.path === '/dashboard/support'" :style="{ backgroundColor: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }"></div>
                </div>

                <div class="divider"></div>

                <div class="navButton" @click="this.$router.push('/')" :style="{ backgroundColor: this.$route.path === '/dashboard/main' ? '#ffffff' : '#ffffff' }">

                    <svg class="navIcon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/main' ? 'var(--secondary-accent)' : 'var(--secondary-accent)' }" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 0.842773L19.6586 8.41896L18.3416 9.92412L10.0001 3.50031L1.65856 9.92412L0.341553 8.41896L10.0001 0.842773Z" fill="#5367AD"/>
                        <path :style="{ fill: this.$route.path === '/main' ? 'var(--secondary-accent)' : 'var(--secondary-accent)' }" d="M10.0001 0.842773L18.0715 7.17405V18.0003H12.0001V13.0003H8.00006V18.0003H2.00006V7.11802L10.0001 0.842773Z" fill="#5367AD"/>
                    </svg>


                    <div class="navName" :style="{ color: this.$route.path === '/main' ? 'var(--secondary-accent)' : 'var(--secondary-accent)' }">
                        Выйти из аккаунта
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.sideBarWrapper{
    box-sizing: border-box;
    height: 100vh;
    padding: 12px;
    position: fixed;
}
.sidebar{
    background-color: #ffffff;
    height: 100%;
    width: 270px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.divider{
    height: 2px;
    background-color: #F3F1FA;
    width: 80%;
}
.avatar{
    height: 60px;
    border-radius: 30px;
    aspect-ratio: 1;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.26));
}
.avatar img{
    height: 54px;
    aspect-ratio: 1;
    border-radius: 27px;
    object-fit: cover;
}
.employee{
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.logo, .employee{
    margin: 0 30px;
}
.naming{
    margin-left: 14px;
}
.name{
    color: var(--colors-black);
    font-size: 20px;
    margin: 0;
    font-weight: 900 !important;
}
.status{
    color: var(--secondary-accent);
    font-size: 14px;
    margin: 0;
    font-weight: 300 !important;
}
.clock{
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 14px;
}
.time{
    font-weight: 500 !important;
    color: var(--colors-black);
    font-size: 16px;
}
.date{
    font-weight: 500 !important;
    color: var(--main-accent);
    font-size: 14px;
}
.nav{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
    margin-top: 35px;
}
.navButton{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 14px;
    width: 100%;
    height: 54px;
    cursor: pointer;
    position: relative;
}
.navButton:hover{
    filter: brightness(95%);
}
.navIcon{
    margin-left: 28px;
}
.navName{
    font-size: 18px;
    font-weight: 500 !important;
    margin: 0;
}
.ptr{
    height: 24px;
    width: 6px;
    border-radius: 5px 0 0 5px;
    position: absolute;
    right: 0;
}
</style>