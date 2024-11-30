<template>
  <div class="dashboard">
    <SideBar/>
    <router-view style="padding: 40px; margin-left: 300px;"></router-view>
  </div>
</template>

<script>
import SideBar from "../../src/components/SideBar.vue"; 

export default {
    components: { SideBar },
}
</script>

<style scoped>

</style>