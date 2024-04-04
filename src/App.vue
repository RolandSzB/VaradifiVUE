<script setup>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Events from "./components/Events.vue";
import EventCalendar from "./components/EventCalendar.vue";
import Shirts from "./components/Shirts.vue";
import Groups from "./components/Groups.vue";
import Content from "./components/Content.vue";
import InstaFeed from "./components/InstaFeed.vue";
import About from "./components/About.vue";
import eventData from "./assets/eventData.json";
import postLink from "./assets/postLink.json";
</script>

<template>
  <Header></Header>
  <Home></Home>
  <Events></Events>
  <EventCalendar v-for="event in eventData" :details="event"></EventCalendar>
  <Shirts></Shirts>
  <Groups></Groups>
  <Content></Content>
  <div
    class="flex flex-col xl:flex-row bg-amber-100 px-32 xl:px-28 py-72 justify-center h-full"
  >
    <InstaFeed v-for="post in postLink" :details="post"></InstaFeed>
  </div>
  <About></About>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
