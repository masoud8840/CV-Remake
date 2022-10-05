<template>
  <div class="group">
    <h5 class="badge-title">
      <slot name="title"></slot>
    </h5>
    <div class="badge-description">
      <slot name="description"></slot>
    </div>
    <div class="badge-tooltip" v-if="props.skillAmount !== 0">
      <p>{{ props.skillAmount }}<span class="text-xs">/5</span> years</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skillAmount: {
    type: Number,
    default: 0,
  },
});
</script>
