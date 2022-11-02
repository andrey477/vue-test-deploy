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
    return String(this.$route?.meta?.layout);
  }
}
</script>

<style lang="scss">
.mt20 {
  margin-top: 20px;
}

.mb20 {
  margin-bottom: 20px;
}

.p20 {
  padding: 20px;
}

.router-link {
  text-decoration: none;
}
</style>
