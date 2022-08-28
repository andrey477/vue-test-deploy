<template>
  <v-app-bar color="blue" dense dark>
    <v-app-bar-nav-icon @click.prevent="handleClick" />
    <v-toolbar-title>12.12.12</v-toolbar-title>
    <v-spacer></v-spacer>
    <span>Username</span>
  </v-app-bar>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class AppBar extends Vue {
  handleClick(): void {
    this.$emit('onDrawer');
  }
}
</script>
