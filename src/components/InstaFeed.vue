<script setup>
defineProps({
  details: Object,
});
</script>
<template>
  <div
    class="flex flex-col xl:flex-row bg-amber-100 px-8 xl:px-28 pb-20 justify-center"
  >
    <div class="p-5">
      <iframe
        src="{{details.link}}/embed/"
        width="400"
        height="480"
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
      ></iframe>
    </div>
  </div>

  <!-- Instagram feed -->
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
