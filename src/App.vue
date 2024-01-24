<script setup>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Events from "./components/Events.vue";
import EventCalendar from "./components/EventCalendar.vue";
import Shirts from "./components/Shirts.vue";
import Groups from "./components/Groups.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";
// import eventData from "./assets/eventData.json";

const eventData = [
  {
    dateNum: 24,
    dateMonth: "JAN",
    eventTitle: "Vigyazat! Sodrasveszely! - Kiss Mate",
    eventDate: "Szerda, Januar 24, 2024",
    eventPeriod: "17:00-21:00",
  },
  {
    dateNum: 31,
    dateMonth: "JAN",
    eventTitle: "Menny es Pokol - Petyar Lorand",
    eventDate: "Szerda, Januar 31, 2024",
    eventPeriod: "17:00-21:00",
  },
  {
    dateNum: 7,
    dateMonth: "FEB",
    eventTitle: "Egy uj tema - Petyar Lorand",
    eventDate: "Szerda, Februar 7, 2024",
    eventPeriod: "17:00-21:00",
  },
];
</script>

<template>
  <Header></Header>
  <Home></Home>
  <Events></Events>
  <EventCalendar v-for="event in eventData" :details="event"></EventCalendar>
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
