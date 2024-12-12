 <template>
  <div id="app">
    <Navbar />
    <main>
    <FeedbackTabs />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FeedbackTabs from "@/components/FeedbackTabs.vue";

export default {
  name: "App",
  components: {
    Navbar,
    FeedbackTabs,
  },
};
</script>

<style>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

main {
  margin-top: 80px; /* Ensure space for the fixed navbar */
}
</style>

<!--<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
-->