<template>
  <div class="body-container">
    <!-- Introduction -->
    <section class="introduction">
      <h3 class="section-title">WELCOME TO MY RESUME</h3>
      <div class="section-description">
        <info-badge :class="setSomeClassOnMobileDevices">
          <template #title>TEHRAN,<br />IRAN</template>
          <template #description>2018</template>
        </info-badge>
        <p class="description-text">
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
      <h3 class="section-title">PERSONAL</h3>
      <div class="personal-info-inner">
        <info-badge class="badge" v-for="info in personalInfo" :key="info">
          <template #title>{{ info.title }}</template>
          <template #description>{{ info.value }}</template>
        </info-badge>
      </div>
    </section>

    <!-- Education -->
    <section class="education">
      <h3 class="section-title">EDUCATION</h3>
      <div class="section-description">
        <info-badge :class="setSomeClassOnMobileDevices">
          <template #title>BACHLEOR OF<br />COMPUTER ENGINEERING</template>
          <template #description>
            Islamic Azad University of Eslamshahr<br />2019 - 2023
          </template>
        </info-badge>
        <p class="description-text">
          After a slow start in biology in high school, when I entered
          university, I changed my field of study to computer engineering and
          continued to study and learn in this field with more motivation and
          enthusiasm.
        </p>
      </div>
    </section>

    <!-- Skill -->
    <section class="skill">
      <h3 class="section-title">SKILL</h3>
      <div class="hard-skill">
        <info-badge
          class="badge"
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
      <div class="soft-skill mt-[50px]">
        <info-badge class="badge" v-for="skill in softSkills" :key="skill">
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

    <!-- Experience -->
    <section class="experience">
      <h3 class="section-title">EXPERIENCE</h3>
      <div class="experience-inner">
        <div class="section-description" v-for="exp in experience" :key="exp">
          <info-badge :class="setSomeClassOnMobileDevices">
            <template #title>{{ exp.projectTitle }}</template>
            <template #description>{{ exp.date }}</template>
          </info-badge>
          <p class="description-text">
            {{ exp.description }}
            <a :href="exp.link" target="_blank">See more</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Languages -->
    <section class="languages">
      <h3 class="section-title">LANGUAGE</h3>
      <div class="language-inner">
        <info-badge
          class="badge"
          v-for="(lang,,index) in languages"
          :key="index"
        >
          <template #title>{{ lang.name }}</template>
          <template #description>
            <img
              src="/Star_Full.svg"
              alt="star-full"
              v-for="filledStar in lang.level"
            />
            <img
              src="/Star_Empty.svg"
              alt="star-full"
              v-for="emptyStar in 5 - lang.level"
            />
          </template>
        </info-badge>
      </div>
    </section>

    <!-- Hobby -->
    <section class="hobby">
      <h3 class="section-title">Hobby</h3>
      <div class="hobby-inner">
        <info-badge
          class="badge"
          v-for="(hobby, index) in hobbies"
          :key="index"
        >
          <template #title>#{{ index + 1 }}</template>
          <template #description>{{ hobby }}</template>
        </info-badge>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
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
const experience = ref([
  {
    projectTitle: "TUC TEAM Manager",
    date: "April 2023",
    description:
      "A project for my startup which I will make another project for it, you can assign tasks to team members.",
    link: "https://github.com/masoud8840/tuc-team-manager",
  },
  {
    projectTitle: "ECOMMERCE WEBSITE",
    date: "October 2022",
    description:
      "A project which will show everything related to my web development skills. (development stopped)",
    link: "https://github.com/masoud8840/E-Commerce",
  },
  {
    projectTitle: `townstar knowledgebase`,
    date: "July 2022",
    description:
      "The Gala Games has a game named TownStar, you need to know buildings info like what they make, what need to build them ... etc. this app will give you all the information you need to know about TownStar’s buildings and their products.",
    link: "https://github.com/masoud8840/townstar-knowledgebase",
  },
  {
    projectTitle: "trading journal",
    date: "August 2022",
    description:
      "As a beginner when you wanna start trading you need to record what you trade and your profits, this journal will help traders to record and journal their trades. it’s completed yet.",
    link: "https://github.com/masoud8840/Trading-Journal",
  },
  {
    projectTitle: "QUIZZ TIME",
    date: "December 2021",
    description:
      "An app that reads information in json form and integrate them into html element, so users can answer them.",
    link: "https://github.com/masoud8840/QuizzTime",
  },
  {
    projectTitle: "HAIR CLINIC",
    date: "October 2021",
    description: "A Multi-Page hair clinic template without functionality.",
    link: "https://github.com/masoud8840/HairClinic",
  },
]);
const languages = ref([
  {
    name: "PERSIAN",
    level: 5,
  },
  {
    name: "ENGLISH",
    level: 3,
  },
]);
const hobbies = ref(["Playing Video Games", "Walk", "Learn New Things"]);
const screenWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});

const setSomeClassOnMobileDevices = computed(() => {
  return screenWidth.value < 768 ? "badge-mobile" : "badge";
});
</script>
