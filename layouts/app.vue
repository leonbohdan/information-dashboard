<script setup>
import { useDate, useDisplay } from 'vuetify'

const date = useDate()
const { mobile } = useDisplay()
const drawer = ref(true)

const currentDate = new Date()
const fullDateWithWeekday = date.format(currentDate, 'fullDateWithWeekday')
const fullTime24h = date.format(currentDate, 'fullTime24h')

onMounted(() => {})
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer
        v-model="drawer"
        :permanent="!mobile"
        :location="mobile ? 'bottom' : undefined"
      >
        <div>{{ fullDateWithWeekday }} • {{ fullTime24h }}</div>

        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
          <v-list-item title="Navigation drawer"></v-list-item>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title> Application bar </v-toolbar-title>

        <v-spacer />

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped lang="sass"></style>
