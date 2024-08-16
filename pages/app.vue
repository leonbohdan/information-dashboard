<script setup lang="ts">
import { useDate } from 'vuetify'
import IconLoader from '~/components/icons/icon-loader.vue'
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
    <v-icon icon="mdi-close"></v-icon>
    <hr />

    <!--    <icon-loader name="close" width="30px" height="30px" />-->

    <component :is="iconComponent" width="50px" height="50px" color="#B9C0D4" />

    <delete-icon width="50px" height="50px" color="red" />

    <v-btn icon="$closesvg"></v-btn>

    <v-btn>
      <v-icon icon="$closesvg" color="red"></v-icon>
    </v-btn>

    <v-icon icon="$closesvg" size="60" color="red"></v-icon>
  </div>
</template>
