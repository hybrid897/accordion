// useAccordion.ts
import { ref, computed } from 'vue';

export function useAccordion() {
  const items = ref<boolean[]>([]);

  const registerItem = (): number => {
    const index = items.value.length;
    items.value.push(false); // Initialize with false (closed)
    return index;
  };

  const toggleItem = (index: number): void => {
    if (index >= 0 && index < items.value.length) {
      items.value[index] = !items.value[index];
    }
  };

  const allOpen = computed(() => items.value.every(item => item));
  const allClosed = computed(() => items.value.every(item => !item));

  const toggleAll = (): void => {
    const newValue = !allOpen.value;
    items.value = items.value.map(() => newValue);
  };

  return {
    items,
    registerItem,
    toggleItem,
    allOpen,
    allClosed,
    toggleAll
  };
}