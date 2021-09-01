<template>
  <button class="accent-button" @click="$emit('clickBtn')">
    <slot></slot>
  </button>
</template>
<style scoped>
.accent-button {
  background-color: #00a9c8;
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 12px 15px;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  border: 2px solid transparent;
  font-family: "Montserrat", sans-serif;
}
</style>