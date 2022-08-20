<template>
  <div class="auth-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class AuthLayout extends Vue {}
</script>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
}
</style>
