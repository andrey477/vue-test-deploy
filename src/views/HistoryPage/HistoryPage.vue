<template>
  <div>
    <p>{{ 'привет' | capitalize }}</p>
    <v-text-field label="Autofocus" autofocus />
    <v-btn color="primary">Кнопка</v-btn>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
@Component
export default class HistoryPage extends Vue {}
</script>
