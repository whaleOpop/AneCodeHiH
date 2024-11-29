<template>
  <div class="container" @click="changeStatement()">
    <div class="box-checked" v-if="statement">
        <img src="../assets/icons/chekbox.svg" alt="">
    </div>
    <div class="box" v-else></div>
    <p class="label">{{ label }}</p>
  </div>
</template>

<script>
export default {
    props: ['checked', 'label'],
    data() {
        return {
            statement: false,
        }
    },
    methods: {
        changeStatement() {
            this.statement = !this.statement
            this.$parent.$emit('changed', this.statement)
        },
    },
    mounted(){
        this.statement = this.checked;
    }
}
</script>

<style scoped>
.container:hover .label{
    color: var(--main-accent);
}
.container{
    width: fit-content;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: start;
    cursor: pointer;
}
.box{
    width: 16px;
    aspect-ratio: 1;
    border: 1px solid var(--secondary-accent);
    background-color: var(--colors-white);
    border-radius: 3px;
}

.box-checked{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    aspect-ratio: 1;
    border: 1px solid var(--main-accent);
    background-color: var(--main-accent);
    border-radius: 3px;
}

.label{
    font-weight: 500;
    color: var(--colors-black);
    font-size: 12px;
}
img{
    width: 10px;
}
</style>