<template>
  <div class="popup-overlay" v-if="visible">
    <div class="flex h-9/12 w-full">
      <img src="../images/tabor.png" class="hidden xl:block w-full h-full" />
      <img src="../images/taborAndroid.png" class="w-screen h-4/6 xl:hidden" />
      <div class="absolute bottom-0 left-28 xl:top-0 xl:left-0 mt-4 ml-4 z-10">
        <button
          @click="closePopup"
          class="heartbeat rounded-full border-4 border-dashed border-white bg-amber-500 py-2 px-4 my-2 hover:bg-amber-700 hover:text-white text-black text-center text-xl xl:text-2xl font-bold"
        >
          Kezdőlap
        </button>
      </div>
      <div class="absolute inset-0 flex flex-col items-center justify-end">
        <div class="flex mx-16 mb-6">
          <a
            href="https://forms.gle/QEexghvqVw7HENiQ9"
            target="_blank"
            class="flex mx-auto max-w-max"
          >
            <button
              @click="closePopup"
              class="heartbeat rounded-full border-4 border-dashed border-white bg-amber-500 py-6 px-14 my-10 xl:my-2 mx-16 xl:mx-40 hover:bg-amber-700 hover:text-white text-black text-center text-xl xl:text-4xl font-bold"
            >
              Jelentkezz
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
