<script setup>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Events from "./components/Events.vue";
import Shirts from "./components/Shirts.vue";
import Groups from "./components/Groups.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";
</script>

<template>
  <Header></Header>
  <Home></Home>
  <Events></Events>
  <Shirts></Shirts>
  <Groups></Groups>
  <Content></Content>
  <About></About>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
