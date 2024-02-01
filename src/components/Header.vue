<script></script>

<template>
  <div class="flex justify-between bg-amber-100 p-2 items-center">
    <div class="flex items-center justify-center">
      <a
        href="index.html"
        class="hover:underline me-6 hover:text-amber-700 visible"
      >
        <img
          src="../images/varadifi.png"
          alt="Logo"
          class="w-8 h-8 object-cover"
        />
      </a>
    </div>
    <div class="flex items-center justify-center">
      <router-link
        to="/events"
        class="hover:underline me-6 hover:text-amber-700"
      >
        Események</router-link
      >
      <router-link
        to="/about"
        class="hover:underline me-6 hover:text-amber-700"
      >
        Rólunk</router-link
      >

      <button
        data-dropdown-toggle="dropdown"
        type="button"
        class="text-3xl visible xl:hidden"
      >
        <i class="bi bi-list hover:text-amber-700"></i>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-amber-100 divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul
          class="py-2 text-sm text-black"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <router-link
              to="/events"
              class="hover:underline me-6 hover:text-amber-700"
            >
              Események</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="hover:underline me-6 hover:text-amber-700"
            >
              Rólunk</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
