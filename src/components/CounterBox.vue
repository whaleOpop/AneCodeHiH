<template>
  <div class="counterBox" >
    <p class="label">{{ label }}</p>
    <div class="counterBlock">
        <div class="decrease" @click="updateValue(localValue - 1)" :style="{ borderColor: error ? 'var(--colors-red)' : '' }">

            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0H0V1.4H10V0Z" fill="var(--colors-black)"/>
            </svg>

        </div>
        <input class="counterValue" type="text" placeholder="0" :value="localValue"  @input="updateValue($event.target.value)" :style="{ borderColor: error ? 'var(--colors-red)' : '' }">
        <div class="increase" @click="updateValue(localValue + 1)" :style="{ borderColor: error ? 'var(--colors-red)' : '' }">

            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.28576 5.71429V10H5.71433V5.71429H10V4.28571H5.71433V0H4.28576V4.28571H0V5.71429H4.28576Z" fill="var(--colors-black)"/>
            </svg>

        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        label: String,
        value: {
            type: Number,
            default: 0,
        },
        error: Boolean,
    },
    data () {
        return {
            localValue: '',
        }
    },
    mounted(){
        this.localValue = this.value
    },
    methods: {
        updateValue(newValue) {
            if (newValue < 0) {
                newValue = 0
            }
            this.localValue = newValue;
            this.$emit('update:value', newValue);
            console.log('updated', newValue)
        },
    },
};
</script>

<style scoped>
.label{
    font-size: 12px;
    color: var(--colors-black);
    margin: 0;
}

.counterBox{
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.counterBlock{
    height: 36px;
    display: flex;
    align-items: center;
}
.decrease{
    border: 1px solid var(--secondary-accent);
    border-radius: 7px 0 0 7px;
    width: 36px;
    height: 100%;
    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
}
.decrease:hover{
    border-color: var(--main-accent);
    cursor: pointer;
}

.decrease:hover svg path{
    fill: var(--main-accent);
}
.increase{
    border: 1px solid var(--secondary-accent);
    background-color: #ffffff;
    border-radius: 0 7px 7px 0;
    width: 36px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
.increase:hover{
    border-color: var(--main-accent);
    cursor: pointer;
}
.increase:hover svg path{
    fill: var(--main-accent);
}
.counterValue{
    border-top: 1px solid var(--secondary-accent);
    border-bottom: 1px solid var(--secondary-accent);
    width: 70px;
    height: 100%;
    font-size: 12px;
    padding: 0;
    color: var(--colors-black);
    border-right: none;
    border-left: none;
    text-align: center;
}
.counterValue:focus{
    outline: none;
}
.counterValue::placeholder{
    color: var(--secondary-accent);
}
</style>