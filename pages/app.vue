<script setup lang="ts">
import { useDate } from 'vuetify'
import iconComponent from '~/assets/icons/close.svg?component'
import DeleteIcon from '~/components/icons/delete-icon.vue'

definePageMeta({
  layout: 'app'
})

const date = useDate()

const currentDate = new Date()
const time = date.format(currentDate, 'fullDateWithWeekday')
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="d-flex flex-column text-center">
    <h1 class="d-inline-block mb-10">pages/app</h1>

    <h3 class="d-inline-block mb-5">{{ time }}</h3>

    <v-btn>btn</v-btn>
    <hr />
    <v-icon icon="mdi:mdi-close"></v-icon>
    <v-icon icon="mdi:mdi-information"></v-icon>

    <hr class="my-2" />

    <v-icon icon="$close"></v-icon>
    <v-icon icon="$arrow-down-tray"></v-icon>
    <v-icon icon="qi-arrow-down-tray"></v-icon>
    <hr />

    <component :is="iconComponent" width="50px" height="50px" color="#B9C0D4" />

    <delete-icon width="50px" height="50px" color="red" />

    <v-btn icon="$arrow-down-tray" variant="text" class="mb-2"></v-btn>

    <v-btn class="mb-2">
      Button
      <v-icon icon="$arrow-down-tray"></v-icon>
    </v-btn>

    <v-btn>
      Button
      <v-icon icon="$arrow-down-tray" size="14" color="red"></v-icon>
    </v-btn>

    <v-icon icon="$arrow-down-tray" size="60" color="red"></v-icon>

    <hr class="my-10" />

    <icon name="qi:academic-cap" size="60" style="color: aqua" />

    <icon name="qi:archive-box" size="80" mode="svg" color="blue" />

    <icon name="qi:arrow-down-tray" size="40" mode="svg" color="#000000" />

    <v-btn class="mb-2">
      Button
      <icon name="qi:archive-box" mode="svg" class="ml-2" />
    </v-btn>

    <v-btn>
      Button
      <icon name="qi:archive-box" class="ml-2" />
    </v-btn>

    <v-btn icon="" size="40">
      <icon name="qi:archive-box" size="24" />
    </v-btn>
  </div>
</template>
