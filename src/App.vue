<script setup lang="ts">
import {RouterView} from 'vue-router'
import TopMenu from './components/TopMenu.vue'
import type {TopBoxInfo} from './types'

function emitHandle(input: TopBoxInfo) {
    console.log(input.BoxMode);
    console.log(input.BoxStr);
}

</script>

<template>
    <TopMenu @boxButtonClick="emitHandle"/>

    <div class="pt-20">
        <RouterView />
    </div>

  <!--
<header>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <div class="flex gap-4 items-center place-content-center">
      <div>
        <a-button @click="test()" type="primary">Ant Design</a-button>
      </div>
      <div>
        <span class="text-base">tailwindcss</span>
      </div>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</header>

<RouterView />
-->
</template>

<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
 */
</style>
