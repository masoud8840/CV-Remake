<template>
  <header class="header">
    <div class="header-container">
      <div class="name">
        <span class="header-subtitle">RESUME</span>
        <h2 class="header-title">Masoud Gharedaghi</h2>
        <span class="header-subtitle"> WEB DESIGNER & DEVELOPER </span>
      </div>
      <div class="social">
        <a
          target="_blank"
          :href="social.link"
          class="social-item"
          v-for="(social, index) in socials"
          :key="index"
        >
          <img :src="`/Logo_${social.name}.svg`" :alt="social.name" />
          <span class="social-caption">{{ social.id }}</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const socials = ref([
  {
    name: "Telegram",
    id: "@weber_man",
    link: "https://telegram.me/weber_man",
  },
  {
    name: "Instagram",
    id: "gharedaghi.ce",
    link: "https://instagram.com/gharedaghi.ce",
  },
  {
    name: "Github",
    id: "masoud8840",
    link: "https://github.com/masoud8840",
  },
]);

// https://telegram.me/weber_man
</script>
