<template>
  <div>
    <button @click="toggleAll">{{ !allClosed ? 'Close All' : 'Expand All' }}</button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useAccordion } from './useAccordion'

const { items, registerItem, toggleItem, allOpen, allClosed, toggleAll } = useAccordion()

provide('registerItem', registerItem)
provide('toggleItem', toggleItem)
provide('items', items)
</script>
