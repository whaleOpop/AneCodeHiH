<template>
    <div>
        <button class="main" v-if="type==1">{{label}}</button>

        <button class="secondary" v-if="type==2">{{label}}</button>

        <button class="outline" v-if="type==3">{{label}}</button>
    </div>
</template>

<script>
export default {
    props: ['type', 'label']
}
</script>

<style scoped>
.main{
    font-size: 12px;
    cursor: pointer;
    background-color: var(--main-accent);
    border: none;
    height: 36px;
    padding: 10px 20px;
    border-radius: 7px;
    color: var(--colors-white);
    font-weight: 500;
    width: 100%;
}
.main:hover{
    background-color: #3D4D84;
}

.secondary{
    font-size: 12px;
    cursor: pointer;
    background-color: var(--colors-gray);
    border: none;
    height: 36px;
    padding: 10px 20px;
    border-radius: 7px;
    color: var(--colors-black);
    font-weight: 500;
    width: 100%;
}
.secondary:hover{
    background-color: var(--colors-gray-dark)
}

.outline{
    font-size: 12px;
    cursor: pointer;
    background-color: var(--colors-white);
    border: 1px solid #E0E2EA;
    height: 36px;
    padding: 10px 20px;
    border-radius: 7px;
    color: var(--colors-black);
    font-weight: 500;
    width: 100%;
}
.outline:hover{
    border-color: var(--secondary-accent);
}
</style>