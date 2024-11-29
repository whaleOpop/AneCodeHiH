<template>
  <div class="wrapper">
    <p class="label">{{ label }}</p>
    <input
      :type="type"
      :maxlength="maxLength"
      :value="localValue"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
      :style="{ borderColor: error ? 'var(--colors-red)' : '' }"
    />
    <svg v-if="localValue.length > 0" @click="updateValue('')" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97331 5L9.66665 8.69333V9.66667H8.69331L4.99998 5.97333L1.30665 9.66667H0.333313V8.69333L4.02665 5L0.333313 1.30667V0.333332H1.30665L4.99998 4.02667L8.69331 0.333332H9.66665V1.30667L5.97331 5Z" fill="#B5B7CB"/>
    </svg>

    <p v-if="maxLength > 0" class="counter">
      {{ localValue.length }}/{{ maxLength }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    maxLength: Number,
    error: Boolean,
    value: {
      type: String,
      default: '',
    },
    placeholder: String,
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
      this.localValue = newValue;
      this.$emit('update:value', newValue);
    },
  },
};
</script>


<style scoped>
svg{
    cursor: pointer;
    position: absolute;
    width: 10px;
    aspect-ratio: 1;
    top: 34px;
    right: 15px;
}
svg:hover{
    filter: brightness(50%);
}
.wrapper{
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    position: relative;
}
input{
    font-size: 12px;
    border-radius: 7px;
    padding: 10px 15px;
    border: 1px solid var(--secondary-accent);
    color: var(--colors-black);
    padding-right: 35px;
}
input:focus{
    outline: none;
    border: 1px solid var(--main-accent);
}
input::placeholder{
    color: var(--secondary-accent);
}


.label{
    font-size: 12px;
    color: var(--colors-black);
    margin: 0;
}
.counter{
    font-size: 12px;
    color: var(--secondary-accent);
    display: flex;
    justify-content: end;
    text-align: end;
    margin: 0;
}
</style>