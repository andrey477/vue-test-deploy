<template>
  <v-navigation-drawer :value="drawer" absolute left class="mt40">
    <v-list nav>
      <v-list-item
        link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        active-class="active"
        :exact="link.exact"
      >
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { linksConfig } from '@/components/SideBar/linksConfig';
import { Prop } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
  @Prop({ type: Boolean, required: true }) readonly drawer: boolean;

  private links = linksConfig;
}
</script>
