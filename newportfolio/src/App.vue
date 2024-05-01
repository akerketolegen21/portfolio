<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="My Photo" class="image" src="@/assets/mypic.jpeg" width="150" height="200" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">📁 About</RouterLink>
        <RouterLink to="/blog">📝 Blog</RouterLink>
        <RouterLink to="/contact">🤳 Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
      <p>Copyright &copy; 2024 Akerke Tolegen</p>
    </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.image {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) );
  } 
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1.5rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
