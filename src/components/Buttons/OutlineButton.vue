<template>
  <button class="outline-button" @click="$emit('clickBtn')">
    <slot></slot>
  </button>
</template>
<style scoped>
.outline-button {
  background-color: #fff;
  /* background-color: rgb(173, 173, 173); */
  border: none;
  color: rgba(196, 196, 196, 0.9);
  border-radius: 8px;
  padding: 12px 15px;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  border: 2px solid #c4c4c4;
  font-family: "Montserrat", sans-serif;
}
</style>