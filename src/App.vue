<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

@Component({
  name: 'app',
  components: { MainLayout, AuthLayout },
})
export default class App extends Vue {
  get layout(): string {
    console.log(this.$route?.meta);
    return String(this.$route?.meta?.layout);
  }
}
</script>
