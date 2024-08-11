<script setup lang="ts">
import { useDate } from 'vuetify'

definePageMeta({
  layout: 'app'
})

const date = useDate()

const currentDate = new Date()
const fullDateWithWeekday = date.format(currentDate, 'fullDateWithWeekday')
const fullTime24h = date.format(currentDate, 'fullTime24h')
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="d-flex flex-column text-center">
    <h1 class="d-inline-block mb-10">pages/app</h1>

    <h3 class="d-inline-block">{{ fullDateWithWeekday }} • {{ fullTime24h }}</h3>
  </div>
</template>
