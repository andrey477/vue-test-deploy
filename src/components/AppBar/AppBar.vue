<template>
  <v-app-bar color="blue" dense dark>
    <v-app-bar-nav-icon @click.prevent="handleClick" />
    <v-toolbar-title>{{ date }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <drop-down :items="items" />
  </v-app-bar>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import DropDown from '@/components/DropDown/DropDown.vue';
import { DropDownItem } from '@/types/types';
import { LOGOUT } from '@/constants/dropdown';
import dayjs from 'dayjs';
@Component({
  components: { DropDown },
})
export default class AppBar extends Vue {
  private format = 'DD.MM.YYYY HH:mm:ss';

  private date = dayjs().format(this.format);

  private interval: number | null = null;

  private items: DropDownItem[] = [
    { title: 'Профиль', link: '/profile' },
    { title: 'Выйти', link: '/logout', slot: LOGOUT },
  ];

  mounted(): void {
    this.interval = setInterval(() => {
      this.date = dayjs().format(this.format);
    }, 1000);
  }

  handleClick(): void {
    this.$emit('onDrawer');
  }

  beforeDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
</script>
