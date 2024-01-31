<script setup>
defineProps({
  details: Object,
});
</script>
<template>
  <div class="p-5 w-full">
    <iframe
      :src="details.link"
      width=" 310 xl:400"
      height="340 xl:480"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
    ></iframe>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
