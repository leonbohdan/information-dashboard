<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
const icon = computed(() => defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg}`)))
</script>

<template>
  <component :is="icon" />
</template>
