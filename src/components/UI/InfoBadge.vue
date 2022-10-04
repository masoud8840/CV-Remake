<template>
  <div
    class="badge inline-flex w-[150px] flex-col relative after:w-[3px] after:h-full after:absolute after:-left-5 after:top-0 after:bg-gold"
  >
    <h5
      class="badge-title font-medium text-xs text-text-dark leading-[18px] uppercase"
    >
      <slot name="title"></slot>
    </h5>
    <div
      class="badge-description font-medium text-xs leading-[18px] text-text-light"
    >
      <slot name="description"></slot>
    </div>
  </div>
</template>
