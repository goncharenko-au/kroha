<template>
  <button class="pale-button" @click="$emit('clickBtn')">
    <slot></slot>
  </button>
</template>
<style scoped>
.pale-button {
  background-color: #9ecdd6;
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 12px 15px;
  font-family: "Montserrat", sans-serif;
  /* background-color: #00a9c8;
 
  
  */
  font-weight: 700;
  cursor: pointer;
}
</style>