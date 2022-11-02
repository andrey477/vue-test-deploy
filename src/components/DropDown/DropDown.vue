<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        fab
        dark
        x-small
        color="white"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon color="blue"> mdi-android </v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, index) in items" :key="item + index">
          <v-list-item-content>
            <a v-if="item.slot === LOGOUT" @click.prevent="logout">
              {{ item.title }}
            </a>
            <router-link v-else :to="item.link" class="router-link">
              {{ item.title }}
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import { DropDownItem } from '@/types/types';
import { LOGOUT } from '@/constants/dropdown';

@Component
export default class DropDown extends Vue {
  @Prop({ type: Array, required: true }) readonly items: DropDownItem[];

  private LOGOUT = LOGOUT;

  logout(): void {
    console.log('logout');
    this.$router.push('/login');
  }
}
</script>
