<template>
  <div
    class="badge group inline-flex w-[180px] flex-col relative after:w-[3px] after:h-full after:absolute after:-left-5 after:top-0 after:bg-gold"
  >
    <h5
      class="badge-title font-semibold text-xs text-text-semidark tracking-[1px] leading-[18px] uppercase"
    >
      <slot name="title"></slot>
    </h5>
    <div
      class="badge-description flex font-medium text-xs leading-[18px] text-text-light"
    >
      <slot name="description"></slot>
    </div>
    <div
      class="badge-tooltip group-hover:-top-12 group-hover:opacity-100 -top-10 opacity-0 absolute pointer-events-none transition-all left-0 z-50 bg-gold shadow-md text-white py-1 px-5 rounded-lg"
      v-if="props.skillAmount !== 0"
    >
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
