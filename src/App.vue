<script setup>
import TheHeader from './components/TheHeader.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <TheHeader />
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
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
