<template>
  <div>
    <button @click="toggle">{{ isOpen ? 'Close' : 'Open' }}</button>
    <div v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed } from 'vue'

const registerItem = inject<() => number>('registerItem')!
const toggleItem = inject<(index: number) => void>('toggleItem')!
const items = inject<Ref<boolean[]>>('items')!

const index = registerItem()

const isOpen = computed(() => items.value[index] ?? false)

const toggle = () => {
  toggleItem(index)
}
</script>
