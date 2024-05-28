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
import EventPopup from "./components/EventPopup.vue"; // Import the popup component

import eventData from "./assets/eventData.json";
import postLink from "./assets/postLink.json";

import { ref } from "vue";

const isPopupVisible = ref(true); // Control the popup visibility

const handleClosePopup = () => {
  isPopupVisible.value = false;
};
</script>

<template>
  <EventPopup :visible="isPopupVisible" @close="handleClosePopup" />
  <div v-if="!isPopupVisible">
    <Header></Header>
    <Home></Home>
    <Events></Events>
    <EventCalendar
      v-for="event in eventData"
      :key="event.id"
      :details="event"
    ></EventCalendar>
    <Shirts></Shirts>
    <Groups></Groups>
    <Content></Content>
    <div
      class="flex flex-col xl:flex-row bg-amber-100 xl:px-4 justify-center h-196"
    >
      <InstaFeed
        v-for="post in postLink"
        :key="post.id"
        :details="post"
      ></InstaFeed>
    </div>
    <About></About>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
