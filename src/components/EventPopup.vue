<template>
  <div class="popup-overlay" v-if="visible">
    <div class="flex relative h-screen w-full">
      <img src="../images/tabor.png" class="w-full h-full" />
      <div class="absolute top-0 left-0 mt-4 ml-4 z-10">
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
              class="heartbeat rounded-full border-4 border-dashed border-white bg-amber-500 py-10 px-24 my-2 mx-16 xl:mx-40 hover:bg-amber-700 hover:text-white text-black text-center text-xl xl:text-4xl font-bold"
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
