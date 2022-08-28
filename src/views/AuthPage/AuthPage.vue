<template>
  <div class="p20 auth-form">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        label="Логин"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        label="Пароль"
        :rules="rules"
        hide-details="auto"
        class="mt20"
      ></v-text-field>
    </v-form>
    <div class="mt20">
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="handleClick"
      >
        Войти
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { VForm } from '@/types/types';

@Component
export default class AuthPage extends Vue {
  private valid = true;

  get rules() {
    return [
      (value) => !!value || 'Required.',
      (value) => {
        return (value && value.length >= 3) || 'Min 3 characters';
      },
    ];
  }

  handleClick() {
    const form = this.$refs.form as VForm;
    form.validate();
  }
}
</script>

<style scoped lang="scss">
.auth-form {
  border: 1px solid blue;
}
</style>
