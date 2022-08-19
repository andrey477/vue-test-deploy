<template>
  <div>
    <v-app-bar color="blue" dense dark>
      <v-app-bar-nav-icon />
      <v-toolbar-title>12.12.12</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>Username</span>
    </v-app-bar>
    <div>
      <v-navigation-drawer
        absolute
        permanent
        left
        class="mt40"
      >
        <v-list nav>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
.mt40 {
  margin-top: 48px;
}
</style>
