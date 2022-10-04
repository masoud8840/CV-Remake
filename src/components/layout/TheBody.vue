<template>
  <div class="container mx-auto mt-[100px] space-y-[100px]">
    <!-- Introduction -->
    <section class="introduction">
      <h3
        class="section-title font-medium text-2xl letter tracking-[1px] text-text-light mb-[50px]"
      >
        WELCOME TO MY RESUME
      </h3>
      <div class="section-description">
        <info-badge>
          <template #title>TEHRAN,<br />IRAN</template>
          <template #description>2018</template>
        </info-badge>
        <p
          class="description-text text-text-light text-sm font-normal leading-[21px]"
        >
          First line of HTML code was written. at those first years I’ve started
          to learn HTML & CSS, I took some persian courses which helps me a lot
          at the starting point I feel like a hero. I had not so much english
          knowledge so I took an english course that helped me to visit youtube
          and other foreign courses which doesn’t taought in persian courses, so
          I gain more... <br />
          I kept up learning HTML & CSS, after a year of learning then
          practicing what I’ve learned, it’s time to JavaScript. I started this
          awesome language took a persian course which made me ready to fire up,
          but feedbacks about that course was not so great... first time, I’m
          got confused about JavaScript and wondered, how can I learn this
          language :3. <br />
          I’ve took one step back to the CSS Preprocessor (SCSS) and CSS
          Framewok (Bootstrap). now I hate bootstrap I think it’s because of
          Tailwind CSS which is more useful than bootstrap. I’m done SCSS and
          Bootstrap then I went to JavaScript. it’s better to start from CSS
          Preprocessors or Frameworks then directly jump into JavaScript, will
          help you to understand JavaScript better. after a year of learning and
          practicing everything together (exept Bootstrap) I’m started to learn
          biggest and the most lovely thing, Vue.js, after Vue.js, Tailwind CSS
          and then Figma.
        </p>
      </div>
    </section>

    <!-- Personal Info -->
    <section class="personal-info">
      <h3
        class="section-title font-medium text-2xl letter tracking-[1px] text-text-light mb-[50px]"
      >
        PERSONAL INFO
      </h3>
      <div class="grid grid-cols-6">
        <info-badge v-for="info in personalInfo" :key="info">
          <template #title>{{ info.title }}</template>
          <template #description>{{ info.value }}</template>
        </info-badge>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InfoBadge from "../UI/InfoBadge.vue";
const personalInfo = ref([
  {
    title: "name",
    value: "Masoud Gharedaghi",
  },
  {
    title: "Date Of Birth",
    value: "05 Mar, 2001",
  },
  {
    title: "Relationship",
    value: "Single",
  },
  {
    title: "Email",
    value: "gharedaghi.zip@gmail.com",
  },
  {
    title: "mobile",
    value: "+98 937 0700 162",
  },
  {
    title: "website",
    value: "www.ce-911.gigfa.com",
  },
]);
</script>
