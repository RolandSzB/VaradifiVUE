<script>
tailwind.config = {
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".25em",
      widest: ".50em",
    },
  },
};
</script>
<script
  src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.x.x/dist/alpine.min.js"
  defer
></script>

<template>
  <div class="flex justify-between bg-amber-100 p-2 items-center">
    <div class="flex items-center justify-center">
      <a
        href="index.html"
        class="hover:underline me-6 hover:text-amber-700 visible"
      >
        <img
          src="images/varadifi.png"
          alt="Logo"
          class="w-8 h-8 object-cover"
        />
      </a>
    </div>
    <div class="flex items-center justify-center">
      <a
        href="events.html"
        class="hover:underline me-6 hover:text-amber-700 invisible xl:visible"
      >
        <p>Események</p>
      </a>
      <a
        href="about.html"
        class="hover:underline me-6 hover:text-amber-700 invisible xl:visible"
      >
        <p>Rólunk</p>
      </a>
      <!-- Dropdown menu -->
      <div
        x-data="{ open: false }"
        class="relative inline-block text-center visible xl:invisible"
      >
        <button @click="open = !open" class="text-3xl">
          <i class="bi bi-list hover:text-amber-700"></i>
        </button>

        <div
          x-show="open"
          @click.away="open = false"
          class="absolute right-0 mt-2 bg-amber-100 border border-gray-300 rounded shadow-lg py-2 w-40 z-10"
        >
          <a href="#" class="block px-4 py-2 text-gray-800 hover:text-amber-700"
            ><a
              href="events.html"
              class="hover:underline me-6 hover:text-amber-700 visible"
            >
              <p>Események</p>
            </a></a
          >
          <a href="#" class="block px-4 py-2 text-gray-800 hover:text-amber-700"
            ><a
              href="about.html"
              class="hover:underline me-6 hover:text-amber-700 visible"
            >
              <p>Rólunk</p>
            </a></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
