<template>
  <div>
    <AppBar @onDrawer="handleDrawer" />
    <div>
      <SideBar :drawer="drawer" />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import AppBar from '@/components/AppBar/AppBar.vue';
import SideBar from '@/components/SideBar/SideBar.vue';
@Component({
  components: { SideBar, AppBar },
})
export default class MainLayout extends Vue {
  private drawer = false;

  handleDrawer(): void {
    this.drawer = !this.drawer;
  }
}
</script>

<style lang="scss" scoped>
.mt40 {
  margin-top: 48px;
}
</style>
