<template>
  <div>
    <AppBar @onDrawer="handleDrawer" />
    <div>
      <SideBar :drawer="drawer" />
      <div>
        <router-view />
      </div>
    </div>
    <v-btn class="mx-2 fixed-btn" fab dark color="indigo" @click="redirect">
      <v-icon dark class="icon"> mdi-plus </v-icon>
    </v-btn>
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

  redirect(): void {
    this.$router.push('/record');
  }
}
</script>

<style lang="scss" scoped>
.mt40 {
  margin-top: 48px;
}

.fixed-btn {
  position: absolute;
  right: 40px;
  bottom: 40px;
}
</style>
