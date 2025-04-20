<script setup lang="ts">
import { useDate } from 'vuetify'
import iconComponent from '@images/icons/close.svg?component'
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

    <v-btn>btn top</v-btn>
    <!--    <hr />-->
    <!--    <v-icon icon="mdi:mdi-close"></v-icon>-->
    <!--    <v-icon icon="mdi:mdi-information"></v-icon>-->

    <hr class="my-2" />

    <v-icon icon="$close" color="primary-darken-1"></v-icon>
    <v-icon icon="custom-close" color="success"></v-icon>
    <v-icon icon="$warning"></v-icon>
    <v-icon icon="mdi-checkbox-blank-outline" color="secondary"></v-icon>
    <v-icon icon="mdi-checkbox-marked"></v-icon>
    <v-icon icon="mdi-checkbox-indeterminate"></v-icon>

    <hr />
    <component :is="iconComponent" width="50px" height="50px" color="#B9C0D4" />
    <delete-icon width="50px" height="50px" color="red" />

    <v-btn icon="academic-cap" variant="text" class="mb-2" color="warning"></v-btn>

    <v-btn class="mb-2">
      Button 1
      <v-icon icon="arrow-down-tray"></v-icon>
    </v-btn>

    <v-btn>
      Button 2
      <v-icon icon="archive-box" size="14" color="red"></v-icon>
    </v-btn>

    <v-icon icon="archive-box" size="60" color="error"></v-icon>
    <v-icon icon="archive-box" size="60" style="color: red"></v-icon>
    <v-icon icon="archive-box" size="60" style="color: var(--v-code-color)"></v-icon>
    <v-icon icon="archive-box" size="60" color="primary-darken-1"></v-icon>

    <hr class="my-10" />

    <v-btn class="mb-2">
      Button 3
      <v-icon icon="archive-box" mode="svg" class="ml-2" />
    </v-btn>

    <v-btn>
      Button 4
      <v-icon icon="archive-box" class="ml-2" size="10" />
    </v-btn>

    <v-btn size="40">
      5
      <v-icon icon="archive-box" size="24" />
    </v-btn>
  </div>
</template>
