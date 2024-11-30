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
                    <div class="time">{{ currentTime }}</div>
                    <div class="date">{{ currentDate }}</div>
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


                    <svg class="navIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" d="M10 16.6667C10.3889 16.6667 10.7174 16.5322 10.9856 16.2633C11.2544 15.9952 11.3889 15.6667 11.3889 15.2778C11.3889 14.8889 11.2544 14.5604 10.9856 14.2922C10.7174 14.0233 10.3889 13.8889 10 13.8889C9.61111 13.8889 9.28259 14.0233 9.01444 14.2922C8.74556 14.5604 8.61111 14.8889 8.61111 15.2778C8.61111 15.6667 8.74556 15.9952 9.01444 16.2633C9.28259 16.5322 9.61111 16.6667 10 16.6667ZM9 12.3889H11.0556C11.0556 11.7222 11.1296 11.2315 11.2778 10.9167C11.4259 10.6019 11.7407 10.2037 12.2222 9.72222C12.8704 9.07407 13.3289 8.53222 13.5978 8.09667C13.8659 7.66185 14 7.16667 14 6.61111C14 5.62963 13.6667 4.83778 13 4.23556C12.3333 3.63407 11.4352 3.33333 10.3056 3.33333C9.28704 3.33333 8.42148 3.58333 7.70889 4.08333C6.99556 4.58333 6.5 5.27778 6.22222 6.16667L8.05556 6.88889C8.18519 6.38889 8.44444 5.98593 8.83333 5.68C9.22222 5.37482 9.67593 5.22222 10.1944 5.22222C10.6944 5.22222 11.1111 5.3563 11.4444 5.62445C11.7778 5.89333 11.9444 6.25 11.9444 6.69444C11.9444 7.00926 11.8426 7.34259 11.6389 7.69445C11.4352 8.0463 11.0926 8.43519 10.6111 8.86111C10 9.39815 9.57889 9.91185 9.34778 10.4022C9.11593 10.8933 9 11.5556 9 12.3889ZM2.22222 20C1.61111 20 1.08778 19.7826 0.652222 19.3478C0.217407 18.9122 0 18.3889 0 17.7778V2.22222C0 1.61111 0.217407 1.08778 0.652222 0.652222C1.08778 0.217407 1.61111 0 2.22222 0H17.7778C18.3889 0 18.9122 0.217407 19.3478 0.652222C19.7826 1.08778 20 1.61111 20 2.22222V17.7778C20 18.3889 19.7826 18.9122 19.3478 19.3478C18.9122 19.7826 18.3889 20 17.7778 20H2.22222ZM2.22222 17.7778H17.7778V2.22222H2.22222V17.7778Z" fill="#B5B7CB"/>
                    </svg>


                    <div class="navName" :style="{ color: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }">
                        Помощь
                    </div>
                    <div class="ptr" v-if="this.$route.path === '/dashboard/help'" :style="{ backgroundColor: this.$route.path === '/dashboard/help' ? 'var(--main-accent)' : 'var(--secondary-accent)' }"></div>
                </div>

                <div class="navButton" @click="this.$router.push('/dashboard/support')" :style="{ backgroundColor: this.$route.path === '/dashboard/support' ? '#F4F5FB' : '#ffffff' }">

                    <svg class="navIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }" d="M9 20V17.7778H17V9.88889C17 8.81481 16.8167 7.80556 16.45 6.86111C16.0833 5.91667 15.5833 5.09259 14.95 4.38889C14.3167 3.68519 13.575 3.12963 12.725 2.72222C11.875 2.31481 10.9667 2.11111 10 2.11111C9.03333 2.11111 8.125 2.31481 7.275 2.72222C6.425 3.12963 5.68333 3.68519 5.05 4.38889C4.41667 5.09259 3.91667 5.91667 3.55 6.86111C3.18333 7.80556 3 8.81481 3 9.88889V16.6667H2C1.45 16.6667 0.979333 16.4493 0.588 16.0144C0.196 15.5789 0 15.0556 0 14.4444V12.2222C0 11.7963 0.0916668 11.4211 0.275 11.0967C0.458333 10.773 0.7 10.5093 1 10.3056L1.075 8.83333C1.225 7.48148 1.571 6.25926 2.113 5.16667C2.65433 4.07407 3.32933 3.14815 4.138 2.38889C4.946 1.62963 5.85433 1.04148 6.863 0.624445C7.871 0.208148 8.91667 0 10 0C11.1 0 12.1543 0.208148 13.163 0.624445C14.171 1.04148 15.075 1.63407 15.875 2.40222C16.675 3.17111 17.346 4.09704 17.888 5.18C18.4293 6.2637 18.775 7.47222 18.925 8.80556L19 10.25C19.3 10.4167 19.5417 10.6619 19.725 10.9856C19.9083 11.31 20 11.6667 20 12.0556V14.6111C20 15.0185 19.9083 15.3796 19.725 15.6944C19.5417 16.0093 19.3 16.25 19 16.4167V17.7778C19 18.3889 18.8043 18.9122 18.413 19.3478C18.021 19.7826 17.55 20 17 20H9ZM7 12.2222C6.71667 12.2222 6.47933 12.1156 6.288 11.9022C6.096 11.6896 6 11.4259 6 11.1111C6 10.7963 6.096 10.5322 6.288 10.3189C6.47933 10.1063 6.71667 10 7 10C7.28333 10 7.521 10.1063 7.713 10.3189C7.90433 10.5322 8 10.7963 8 11.1111C8 11.4259 7.90433 11.6896 7.713 11.9022C7.521 12.1156 7.28333 12.2222 7 12.2222ZM13 12.2222C12.7167 12.2222 12.4793 12.1156 12.288 11.9022C12.096 11.6896 12 11.4259 12 11.1111C12 10.7963 12.096 10.5322 12.288 10.3189C12.4793 10.1063 12.7167 10 13 10C13.2833 10 13.521 10.1063 13.713 10.3189C13.9043 10.5322 14 10.7963 14 11.1111C14 11.4259 13.9043 11.6896 13.713 11.9022C13.521 12.1156 13.2833 12.2222 13 12.2222ZM4.025 10.5C3.95833 9.40741 4.096 8.41667 4.438 7.52778C4.77933 6.63889 5.23733 5.88407 5.812 5.26333C6.38733 4.64333 7.05 4.16667 7.8 3.83333C8.55 3.5 9.3 3.33333 10.05 3.33333C11.5667 3.33333 12.8793 3.86593 13.988 4.93111C15.096 5.99556 15.7667 7.32407 16 8.91667C14.4333 8.89815 13.0167 8.43037 11.75 7.51333C10.4833 6.59704 9.525 5.40741 8.875 3.94444C8.60833 5.44444 8.046 6.77296 7.188 7.93C6.32933 9.08778 5.275 9.94444 4.025 10.5Z" fill="#B5B7CB"/>
                    </svg>

                    <div class="navName" :style="{ color: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }">
                        Поддержка
                    </div>
                    <div class="ptr" v-if="this.$route.path === '/dashboard/support'" :style="{ backgroundColor: this.$route.path === '/dashboard/support' ? 'var(--main-accent)' : 'var(--secondary-accent)' }"></div>
                </div>

                <!-- <div class="divider"></div> -->

                <div class="navButton" id="exit" @click="this.$router.push('/')">

                    <svg class="navIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :style="{ fill: this.$route.path === '/main' ? 'var(--secondary-accent)' : 'var(--secondary-accent)' }" d="M0 20V17.7778H2.22222V2.22222C2.22222 1.61111 2.44 1.08778 2.87556 0.652222C3.31037 0.217407 3.83333 0 4.44444 0H15.5556C16.1667 0 16.69 0.217407 17.1256 0.652222C17.5604 1.08778 17.7778 1.61111 17.7778 2.22222V17.7778H20V20H0ZM15.5556 17.7778V2.22222H4.44444V17.7778H15.5556ZM12.2222 11.1111C12.537 11.1111 12.8011 11.0044 13.0144 10.7911C13.227 10.5785 13.3333 10.3148 13.3333 10C13.3333 9.68519 13.227 9.42111 13.0144 9.20778C12.8011 8.99519 12.537 8.88889 12.2222 8.88889C11.9074 8.88889 11.6437 8.99519 11.4311 9.20778C11.2178 9.42111 11.1111 9.68519 11.1111 10C11.1111 10.3148 11.2178 10.5785 11.4311 10.7911C11.6437 11.0044 11.9074 11.1111 12.2222 11.1111Z" fill="#B5B7CB"/>
                    </svg>

                    <div class="navName">
                        Выйти из аккаунта
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "Clock",
  setup() {
    const currentTime = ref("");
    const currentDate = ref("");

    const updateClock = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString();
      currentDate.value = now.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    };

    onMounted(() => {
      updateClock();
      const interval = setInterval(updateClock, 1000);
      onUnmounted(() => clearInterval(interval));
    });

    return { currentTime, currentDate };
  },
};
</script>

<style scoped>
#exit .navIcon{
    margin-left: 45px;
}
#exit{
    position: absolute;
    bottom: 30px;
    color: var(--secondary-accent);
    background-color: transparent;
    
}
#exit:hover{
    filter: brightness(100%);
    color: var(--colors-red);
}
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
    height: 100%;
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
    height: 16px;
    aspect-ratio: 1;
}
.navName{
    font-size: 16px;
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