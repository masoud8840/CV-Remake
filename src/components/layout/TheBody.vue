<template>
  <div class="container mx-auto mt-[100px] space-y-[100px] pb-10">
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

    <!-- Education -->
    <section class="personal-info">
      <h3
        class="section-title font-medium text-2xl letter tracking-[1px] text-text-light mb-[50px]"
      >
        EDUCATION
      </h3>
      <div class="section-description">
        <info-badge>
          <template #title>BACHLEOR OF<br />COMPUTER ENGINEERING</template>
          <template #description>
            Islamic Azad University of<br />Eslamshahr<br />2019 - 2022
          </template>
        </info-badge>
        <p
          class="description-text text-text-light text-sm font-normal leading-[21px]"
        >
          After a slow start in biology in high school, when I entered
          university, I changed my field of study to computer engineering and
          continued to study and learn in this field with more motivation and
          enthusiasm.
        </p>
      </div>
    </section>

    <!-- Skill -->
    <section class="personal-info">
      <h3
        class="section-title font-medium text-2xl letter tracking-[1px] text-text-light mb-[50px]"
      >
        SKILL
      </h3>
      <div class="grid grid-cols-6 gap-[50px]">
        <info-badge
          v-for="skill in hardSkills"
          :key="skill"
          :skill-amount="skill.value"
        >
          <template #title>{{ skill.title }}</template>
          <template #description>
            <img
              src="/Star_Full.svg"
              alt="star-full"
              v-for="fullStar in skill.value"
            />
            <img
              src="/Star_Empty.svg"
              alt="star-full"
              v-for="emptyStasoftSkillsr in 5 - skill.value"
            />
          </template>
        </info-badge>
      </div>
      <div class="grid grid-cols-6 gap-[50px] mt-[50px]">
        <info-badge v-for="skill in softSkills" :key="skill">
          <template #title>{{ skill.title }}</template>
          <template #description>
            <img
              src="/Star_Full.svg"
              alt="star-full"
              v-for="fullStar in skill.value"
            />
            <img
              src="/Star_Empty.svg"
              alt="star-full"
              v-for="emptyStasoftSkillsr in 5 - skill.value"
            />
          </template>
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

const hardSkills = ref([
  {
    title: "html",
    value: 4,
  },
  {
    title: "CSS",
    value: 4,
  },
  {
    title: "SCSS",
    value: 3,
  },
  {
    title: "bootstrap",
    value: 2,
  },
  {
    title: "tailwind css",
    value: 1,
  },
  {
    title: "javascript",
    value: 3,
  },
  {
    title: "vue.js",
    value: 2,
  },
  {
    title: "figma",
    value: 1,
  },
]);

const softSkills = ref([
  {
    title: "Problem solving",
    value: 4,
  },
  {
    title: "self learning",
    value: 4,
  },
  {
    title: "patience",
    value: 4,
  },
  {
    title: "time management",
    value: 4,
  },
  {
    title: "interpersonal skills",
    value: 4,
  },
  {
    title: "emotional intelligence",
    value: 4,
  },
]);
</script>
