<template>
    <div class="container">
      <div class="box-checked" v-if="checked">
          <div class="circle"></div>
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
    border-radius: 8px;
}

.box-checked{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    aspect-ratio: 1;
    border: 1px solid var(--main-accent);
    border-radius: 8px;
}

.label{
    font-weight: 500;
    color: var(--colors-black);
    font-size: 12px;
    margin: 0;
}
.circle{
    width: 10px;
    border-radius: 5px;
    aspect-ratio: 1;
    background-color: var(--main-accent);
}
</style>